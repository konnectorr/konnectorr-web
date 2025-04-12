import { pgTable, text, serial, boolean, timestamp, integer, unique, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Role types for admin users
export const roleTypes = ["super_admin", "manager", "analyst", "support"] as const;
export type RoleType = typeof roleTypes[number];

// Enhanced users table with role-based access control
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  firstName: text("first_name"),
  lastName: text("last_name"),
  email: text("email"),
  role: text("role", { enum: roleTypes }).default("analyst"),
  isActive: boolean("is_active").default(true),
  isAdmin: boolean("is_admin").default(false),
  twoFactorSecret: text("two_factor_secret"),
  twoFactorEnabled: boolean("two_factor_enabled").default(false),
  avatarUrl: text("avatar_url"),
  lastLogin: timestamp("last_login"),
  permissions: jsonb("permissions").default({}),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  firstName: true,
  lastName: true,
  email: true,
  role: true,
  isActive: true,
  isAdmin: true,
  twoFactorSecret: true,
  twoFactorEnabled: true,
  avatarUrl: true,
  permissions: true,
});

// User creation schema with validation
export const createUserSchema = z.object({
  username: z.string().min(3, { message: "Username must be at least 3 characters" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
  firstName: z.string().min(2, { message: "First name is required" }),
  lastName: z.string().min(2, { message: "Last name is required" }),
  email: z.string().email({ message: "Valid email is required" }),
  role: z.enum(roleTypes).default("analyst"),
  isActive: z.boolean().default(true),
  isAdmin: z.boolean().default(false),
});

// User update schema
export const updateUserSchema = createUserSchema.partial().omit({ password: true }).extend({
  id: z.number(),
  newPassword: z.string().min(8, { message: "Password must be at least 8 characters" }).optional(),
});

// Admin login schema
export const loginSchema = z.object({
  username: z.string().min(1, { message: "Username is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

// Admin signup schema with secret phrase validation
export const adminSignupSchema = z.object({
  username: z.string().min(3, { message: "Username must be at least 3 characters" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
  confirmPassword: z.string().min(8, { message: "Confirm password is required" }),
  firstName: z.string().min(2, { message: "First name is required" }),
  lastName: z.string().min(2, { message: "Last name is required" }),
  email: z.string().email({ message: "Valid email is required" }),
  role: z.enum(roleTypes).default("analyst"),
  secretPhrase: z.string().min(1, { message: "Secret phrase is required" }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

// 2FA verification schema
export const verifyTwoFactorSchema = z.object({
  token: z.string().min(6, { message: "Token must be 6 digits" }).max(6),
  userId: z.number(),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type CreateUserInput = z.infer<typeof createUserSchema>;
export type UpdateUserInput = z.infer<typeof updateUserSchema>;
export type AdminSignupInput = z.infer<typeof adminSignupSchema>;

// Admin sessions for maintaining login state
export const adminSessions = pgTable("admin_sessions", {
  id: serial("id").primaryKey(),
  userId: serial("user_id").references(() => users.id),
  token: text("token").notNull().unique(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertAdminSessionSchema = createInsertSchema(adminSessions).pick({
  userId: true,
  token: true,
  expiresAt: true,
});

export type InsertAdminSession = z.infer<typeof insertAdminSessionSchema>;
export type AdminSession = typeof adminSessions.$inferSelect;

// New table for service sign-up submissions
export const serviceSignups = pgTable("service_signups", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  address: text("address").notNull(),
  city: text("city").notNull(),
  state: text("state").notNull(),
  zipCode: text("zip_code").notNull(),
  phone: text("phone").notNull(),
  email: text("email"),
  speedRequirement: text("speed_requirement").notNull(),
  preferredProvider: text("preferred_provider"),
  additionalEquipment: text("additional_equipment"),
  streamingServices: text("streaming_services"),
  installationPreference: text("installation_preference").notNull(),
  specialRequests: text("special_requests"),
  contactConsent: boolean("contact_consent").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// Create schema for validating service signup data
export const insertServiceSignupSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters" }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters" }),
  address: z.string().min(5, { message: "Address must be at least 5 characters" }),
  city: z.string().min(2, { message: "City must be at least 2 characters" }),
  state: z.string().min(2, { message: "State must be at least 2 characters" }),
  zipCode: z.string().regex(/^\d{5}(-\d{4})?$/, { message: "ZIP code must be in format 12345 or 12345-6789" }),
  phone: z.string().regex(/^\d{10}$/, { message: "Phone must be 10 digits without spaces or dashes" }),
  email: z.string().email({ message: "Email must be valid" }).optional().nullable(),
  speedRequirement: z.string({ required_error: "Speed requirement is required" }),
  preferredProvider: z.string().optional().nullable(),
  // Accept array or string for additionalEquipment
  additionalEquipment: z.union([
    z.string().optional().nullable(), 
    z.array(z.string()).optional().nullable()
  ]).transform(val => {
    // If it's an array, convert to comma-separated string
    if (Array.isArray(val)) {
      return val.join(',');
    }
    // Otherwise return as is
    return val;
  }),
  streamingServices: z.union([
    z.string().optional().nullable(), 
    z.array(z.string()).optional().nullable()
  ]).transform(val => {
    // If it's an array, convert to comma-separated string
    if (Array.isArray(val)) {
      return val.join(',');
    }
    // Otherwise return as is
    return val;
  }),
  installationPreference: z.string({ required_error: "Installation preference is required" }),
  specialRequests: z.string().optional().nullable(),
  contactConsent: z.boolean({ required_error: "You must agree to be contacted" }),
});

export type InsertServiceSignup = z.infer<typeof insertServiceSignupSchema>;
export type ServiceSignup = typeof serviceSignups.$inferSelect;

// New table for eSIM callback requests
export const esimCallbacks = pgTable("esim_callbacks", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  phone: text("phone").notNull(),
  email: text("email").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// Create schema for validating eSIM callback data
export const insertEsimCallbackSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  phone: z.string().min(10),
  email: z.string().email(),
});

export type InsertEsimCallback = z.infer<typeof insertEsimCallbackSchema>;
export type EsimCallback = typeof esimCallbacks.$inferSelect;

// New table for IPTV (QwickTV) signups
export const iptvSignups = pgTable("iptv_signups", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  planId: text("plan_id"),
  address: text("address"),
  deviceCount: text("device_count"),
  streamingPreferences: text("streaming_preferences"),
  agreeToTerms: boolean("agree_to_terms").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// Create schema for validating IPTV signup data
export const insertIptvSignupSchema = z.object({
  firstName: z.string().min(2, { message: "First name is required" }),
  lastName: z.string().min(2, { message: "Last name is required" }),
  email: z.string().email({ message: "Valid email is required" }),
  phone: z.string().min(10, { message: "Valid phone number is required" }),
  planId: z.string().optional(),
  address: z.string().optional(),
  deviceCount: z.string().optional(),
  streamingPreferences: z.string().optional(),
  agreeToTerms: z.boolean(),
});

export type InsertIptvSignup = z.infer<typeof insertIptvSignupSchema>;
export type IptvSignup = typeof iptvSignups.$inferSelect;

// Status types for customer interactions and tasks
export const statusTypes = ["new", "in_progress", "contacted", "resolved", "canceled"] as const;
export type StatusType = typeof statusTypes[number];

// Priority levels for tasks
export const priorityLevels = ["low", "medium", "high", "urgent"] as const; 
export type PriorityLevel = typeof priorityLevels[number];

// Email template types
export const templateTypes = ["welcome", "follow_up", "service_confirmation", "special_offer", "custom"] as const;
export type TemplateType = typeof templateTypes[number];

// Email templates for customer communications
export const emailTemplates = pgTable("email_templates", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  type: text("type", { enum: templateTypes }).notNull(),
  subject: text("subject").notNull(),
  body: text("body").notNull(),
  isActive: boolean("is_active").default(true),
  createdById: integer("created_by_id").references(() => users.id),
  lastModifiedById: integer("last_modified_by_id").references(() => users.id),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const insertEmailTemplateSchema = createInsertSchema(emailTemplates).pick({
  name: true,
  type: true,
  subject: true,
  body: true,
  isActive: true,
  createdById: true,
  lastModifiedById: true,
});

export type InsertEmailTemplate = z.infer<typeof insertEmailTemplateSchema>;
export type EmailTemplate = typeof emailTemplates.$inferSelect;

// Customer communications history
export const customerCommunications = pgTable("customer_communications", {
  id: serial("id").primaryKey(),
  customerId: integer("customer_id"), // Generic customer ID, can refer to any signup table
  customerType: text("customer_type").notNull(), // 'service_signup', 'esim_callback', 'iptv_signup'
  type: text("type").notNull(), // 'email', 'sms', 'call'
  subject: text("subject"),
  content: text("content"),
  direction: text("direction").notNull(), // 'outbound', 'inbound'
  sentById: integer("sent_by_id").references(() => users.id),
  status: text("status").notNull(), // 'sent', 'delivered', 'failed', 'read'
  metadata: jsonb("metadata"), // Additional data like delivery receipts, open tracking
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertCustomerCommunicationSchema = createInsertSchema(customerCommunications).pick({
  customerId: true,
  customerType: true,
  type: true,
  subject: true,
  content: true,
  direction: true,
  sentById: true,
  status: true,
  metadata: true,
});

export type InsertCustomerCommunication = z.infer<typeof insertCustomerCommunicationSchema>;
export type CustomerCommunication = typeof customerCommunications.$inferSelect;

// Tasks for customer follow-ups and management
export const customerTasks = pgTable("customer_tasks", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  customerId: integer("customer_id"), // Generic customer ID, can refer to any signup table
  customerType: text("customer_type").notNull(), // 'service_signup', 'esim_callback', 'iptv_signup'
  assignedToId: integer("assigned_to_id").references(() => users.id),
  createdById: integer("created_by_id").references(() => users.id),
  status: text("status", { enum: statusTypes }).default("new"),
  priority: text("priority", { enum: priorityLevels }).default("medium"),
  dueDate: timestamp("due_date"),
  completedAt: timestamp("completed_at"),
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const insertCustomerTaskSchema = createInsertSchema(customerTasks).pick({
  title: true,
  description: true,
  customerId: true,
  customerType: true,
  assignedToId: true,
  createdById: true,
  status: true,
  priority: true,
  dueDate: true,
  notes: true,
});

export type InsertCustomerTask = z.infer<typeof insertCustomerTaskSchema>;
export type CustomerTask = typeof customerTasks.$inferSelect;

// Task comments for collaboration
export const taskComments = pgTable("task_comments", {
  id: serial("id").primaryKey(),
  taskId: integer("task_id").references(() => customerTasks.id).notNull(),
  userId: integer("user_id").references(() => users.id).notNull(),
  content: text("content").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertTaskCommentSchema = createInsertSchema(taskComments).pick({
  taskId: true,
  userId: true,
  content: true,
});

export type InsertTaskComment = z.infer<typeof insertTaskCommentSchema>;
export type TaskComment = typeof taskComments.$inferSelect;

// Customer status history for analytics tracking
export const customerStatusHistory = pgTable("customer_status_history", {
  id: serial("id").primaryKey(),
  customerId: integer("customer_id").notNull(),
  customerType: text("customer_type").notNull(), // 'service_signup', 'esim_callback', 'iptv_signup'
  status: text("status", { enum: statusTypes }).notNull(),
  notes: text("notes"),
  changedById: integer("changed_by_id").references(() => users.id),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertCustomerStatusHistorySchema = createInsertSchema(customerStatusHistory).pick({
  customerId: true,
  customerType: true,
  status: true,
  notes: true,
  changedById: true,
});

export type InsertCustomerStatusHistory = z.infer<typeof insertCustomerStatusHistorySchema>;
export type CustomerStatusHistory = typeof customerStatusHistory.$inferSelect;

// Integration types for external service integrations
export const integrationTypes = ["zapier", "ifttt", "pabbly", "make"] as const;
export type IntegrationType = typeof integrationTypes[number];

// Integration settings for external service connections
export const integrationConfigs = pgTable("integration_configs", {
  id: serial("id").primaryKey(),
  type: text("type", { enum: integrationTypes }).notNull(),
  name: text("name").notNull(),
  serviceSignupWebhook: text("service_signup_webhook"),
  esimCallbackWebhook: text("esim_callback_webhook"),
  iptvSignupWebhook: text("iptv_signup_webhook"),
  apiKey: text("api_key"),
  isActive: boolean("is_active").default(true),
  lastModifiedById: integer("last_modified_by_id").references(() => users.id),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const insertIntegrationConfigSchema = createInsertSchema(integrationConfigs).pick({
  type: true,
  name: true,
  serviceSignupWebhook: true,
  esimCallbackWebhook: true,
  iptvSignupWebhook: true,
  apiKey: true,
  isActive: true,
  lastModifiedById: true,
});

export type InsertIntegrationConfig = z.infer<typeof insertIntegrationConfigSchema>;
export type IntegrationConfig = typeof integrationConfigs.$inferSelect;
