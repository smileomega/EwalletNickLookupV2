import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { checkNicknameSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get all e-wallet services
  app.get("/api/services", async (req, res) => {
    try {
      const services = await storage.getAllServices();
      return res.json({ success: true, data: services });
    } catch (error) {
      console.error("Error fetching services:", error);
      return res.status(500).json({
        success: false,
        error: {
          code: "internal_server_error",
          message: "An error occurred while retrieving e-wallet services"
        }
      });
    }
  });

  // Check nickname endpoint
  app.get("/api/cek-nickname", async (req, res) => {
    try {
      // Validate query parameters
      const { phone, service } = checkNicknameSchema.parse({
        phone: req.query.phone,
        service: req.query.service
      });

      // Get account information
      const account = await storage.getAccountByPhoneAndServiceCode(phone, service);
      
      if (!account) {
        return res.status(404).json({
          success: false,
          error: {
            code: "account_not_found",
            message: "No account found with the provided phone number"
          }
        });
      }

      // Return account information
      return res.json({
        success: true,
        data: {
          phone: account.phoneNumber,
          service: account.service.code,
          serviceName: account.service.name,
          nickname: account.nickname,
          accountStatus: account.status
        }
      });
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          success: false,
          error: {
            code: "validation_error",
            message: "Invalid request parameters",
            details: error.errors
          }
        });
      }

      console.error("Error checking nickname:", error);
      return res.status(500).json({
        success: false,
        error: {
          code: "internal_server_error",
          message: "An error occurred while checking the nickname"
        }
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
