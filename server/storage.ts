import { db } from "@db";
import { eWalletAccounts, eWalletServices } from "@shared/schema";
import { eq, and } from "drizzle-orm";

export const storage = {
  /**
   * Get all e-wallet services
   */
  async getAllServices() {
    return await db.query.eWalletServices.findMany({
      orderBy: (services) => services.name,
    });
  },

  /**
   * Get e-wallet service by code
   */
  async getServiceByCode(code: string) {
    return await db.query.eWalletServices.findFirst({
      where: eq(eWalletServices.code, code),
    });
  },

  /**
   * Get account by phone number and service ID
   */
  async getAccountByPhoneAndService(phoneNumber: string, serviceId: number) {
    return await db.query.eWalletAccounts.findFirst({
      where: and(
        eq(eWalletAccounts.phoneNumber, phoneNumber),
        eq(eWalletAccounts.serviceId, serviceId)
      ),
      with: {
        service: true,
      },
    });
  },

  /**
   * Get account by phone number and service code
   */
  async getAccountByPhoneAndServiceCode(phoneNumber: string, serviceCode: string) {
    // First get the service ID
    const service = await this.getServiceByCode(serviceCode);
    if (!service) {
      return null;
    }
    
    // Then get the account
    return await this.getAccountByPhoneAndService(phoneNumber, service.id);
  }
};
