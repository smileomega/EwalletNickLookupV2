import { db } from "./index";
import * as schema from "@shared/schema";
import { eq } from "drizzle-orm";

async function seed() {
  try {
    console.log("Seeding database...");

    // First, check if services already exist
    const existingServices = await db.query.eWalletServices.findMany();
    if (existingServices.length === 0) {
      // Seed e-wallet services
      console.log("Seeding e-wallet services...");
      await db.insert(schema.eWalletServices).values([
        { code: "shopeepay", name: "ShopeePay" },
        { code: "gopay", name: "GoPay" },
        { code: "dana", name: "DANA" },
        { code: "ovo", name: "OVO" },
        { code: "isaku", name: "iSaku" }
      ]);
    } else {
      console.log("E-wallet services already seeded, skipping...");
    }

    // Get all service IDs
    const services = await db.query.eWalletServices.findMany();
    const serviceMap = new Map(services.map(service => [service.code, service.id]));

    // Check if accounts already exist
    const existingAccounts = await db.query.eWalletAccounts.findMany();
    if (existingAccounts.length === 0) {
      // Seed e-wallet accounts
      console.log("Seeding e-wallet accounts...");
      
      const accountsData = [
        // ShopeePay accounts
        { 
          serviceId: serviceMap.get("shopeepay"), 
          phoneNumber: "81234567890", 
          nickname: "John Smith", 
          status: "active" 
        },
        { 
          serviceId: serviceMap.get("shopeepay"), 
          phoneNumber: "81298765432", 
          nickname: "Sarah Johnson", 
          status: "active" 
        },
        { 
          serviceId: serviceMap.get("shopeepay"), 
          phoneNumber: "87712345678", 
          nickname: "David Lee", 
          status: "inactive" 
        },
        
        // GoPay accounts
        { 
          serviceId: serviceMap.get("gopay"), 
          phoneNumber: "81234567890", 
          nickname: "John Smith", 
          status: "active" 
        },
        { 
          serviceId: serviceMap.get("gopay"), 
          phoneNumber: "89876543210", 
          nickname: "Maria Garcia", 
          status: "active" 
        },
        { 
          serviceId: serviceMap.get("gopay"), 
          phoneNumber: "81567890123", 
          nickname: "Robert Chen", 
          status: "pending" 
        },
        
        // DANA accounts
        { 
          serviceId: serviceMap.get("dana"), 
          phoneNumber: "85678901234", 
          nickname: "Jennifer Wong", 
          status: "active" 
        },
        { 
          serviceId: serviceMap.get("dana"), 
          phoneNumber: "89012345678", 
          nickname: "Michael Rodriguez", 
          status: "active" 
        },
        { 
          serviceId: serviceMap.get("dana"), 
          phoneNumber: "81246810121", 
          nickname: "Emma Wilson", 
          status: "suspended" 
        },
        
        // OVO accounts
        { 
          serviceId: serviceMap.get("ovo"), 
          phoneNumber: "81357911131", 
          nickname: "James Taylor", 
          status: "active" 
        },
        { 
          serviceId: serviceMap.get("ovo"), 
          phoneNumber: "82468101214", 
          nickname: "Olivia Brown", 
          status: "active" 
        },
        { 
          serviceId: serviceMap.get("ovo"), 
          phoneNumber: "83579111315", 
          nickname: "William Davis", 
          status: "inactive" 
        },
        
        // iSaku accounts
        { 
          serviceId: serviceMap.get("isaku"), 
          phoneNumber: "84680121416", 
          nickname: "Sophia Martinez", 
          status: "active" 
        },
        { 
          serviceId: serviceMap.get("isaku"), 
          phoneNumber: "85791131517", 
          nickname: "Benjamin Clark", 
          status: "pending" 
        },
        { 
          serviceId: serviceMap.get("isaku"), 
          phoneNumber: "86802141618", 
          nickname: "Isabella Lopez", 
          status: "active" 
        }
      ];
      
      // Insert accounts
      for (const account of accountsData) {
        if (account.serviceId) {
          await db.insert(schema.eWalletAccounts).values(account);
        } else {
          console.error(`Service ID not found for account: ${account.nickname}`);
        }
      }
    } else {
      console.log("E-wallet accounts already seeded, skipping...");
    }

    console.log("Database seeding completed successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}

seed();
