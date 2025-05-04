import { pgTable, text, serial, integer, boolean, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { relations } from "drizzle-orm";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// E-wallet Services Schema
export const eWalletServices = pgTable("e_wallet_services", {
  id: serial("id").primaryKey(),
  code: varchar("code", { length: 20 }).notNull().unique(),
  name: varchar("name", { length: 50 }).notNull(),
});

export const insertEWalletServiceSchema = createInsertSchema(eWalletServices);
export type InsertEWalletService = z.infer<typeof insertEWalletServiceSchema>;
export type EWalletService = typeof eWalletServices.$inferSelect;

// E-wallet Accounts Schema
export const eWalletAccounts = pgTable("e_wallet_accounts", {
  id: serial("id").primaryKey(),
  serviceId: integer("service_id").references(() => eWalletServices.id).notNull(),
  phoneNumber: varchar("phone_number", { length: 20 }).notNull(),
  nickname: varchar("nickname", { length: 100 }).notNull(),
  status: varchar("status", { length: 20 }).notNull().default("active"),
});

// Create a unique constraint on serviceId and phoneNumber
export const eWalletAccountsRelations = relations(eWalletAccounts, ({ one }) => ({
  service: one(eWalletServices, { 
    fields: [eWalletAccounts.serviceId], 
    references: [eWalletServices.id] 
  }),
}));

export const eWalletServicesRelations = relations(eWalletServices, ({ many }) => ({
  accounts: many(eWalletAccounts)
}));

export const insertEWalletAccountSchema = createInsertSchema(eWalletAccounts);
export type InsertEWalletAccount = z.infer<typeof insertEWalletAccountSchema>;
export type EWalletAccount = typeof eWalletAccounts.$inferSelect;

// Schema for validating check nickname requests
export const checkNicknameSchema = z.object({
  phone: z.string()
    .min(8, "Phone number must be at least 8 digits")
    .max(15, "Phone number must be at most 15 digits")
    .regex(/^8[1-9][0-9]{7,11}$/, "Please enter a valid Indonesian phone number"),
  service: z.string()
    .min(1, "Service is required")
});

export type CheckNicknameRequest = z.infer<typeof checkNicknameSchema>;
