import { 
  users, type User, type InsertUser, type CreateUserInput, type UpdateUserInput,
  serviceSignups, type ServiceSignup, type InsertServiceSignup,
  esimCallbacks, type EsimCallback, type InsertEsimCallback,
  adminSessions, type AdminSession, type InsertAdminSession,
  iptvSignups, type IptvSignup, type InsertIptvSignup,
  emailTemplates, type EmailTemplate, type InsertEmailTemplate,
  customerCommunications, type CustomerCommunication, type InsertCustomerCommunication,
  customerTasks, type CustomerTask, type InsertCustomerTask,
  taskComments, type TaskComment, type InsertTaskComment,
  customerStatusHistory, type CustomerStatusHistory, type InsertCustomerStatusHistory,
  integrationConfigs, type IntegrationConfig, type InsertIntegrationConfig,
  type StatusType, type RoleType, type IntegrationType
} from "@shared/schema";
import { desc, inArray, eq, gte, lte, count, ilike, or, sql, and, isNotNull } from "drizzle-orm";
import { drizzle } from "drizzle-orm/postgres-js";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import postgres from "postgres";

// Filtering and pagination interfaces for advanced data management
export interface PaginationOptions {
  page: number;
  limit: number;
}

export interface UserFilters {
  role?: RoleType;
  isActive?: boolean; 
  search?: string; // Search in names, email, username
}

export interface CustomerFilters {
  status?: StatusType;
  dateFrom?: Date;
  dateTo?: Date;
  search?: string; // Search in name, email, phone
}

export interface TaskFilters {
  status?: StatusType;
  priority?: string;
  assignedToId?: number;
  dateFrom?: Date;
  dateTo?: Date;
  search?: string;
}

export interface IStorage {
  // Enhanced user management methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  updateUser(id: number, updates: Partial<InsertUser>): Promise<User | undefined>;
  deleteUser(username: string): Promise<boolean>;
  
  // Integration configuration methods
  getIntegrationConfig(type: string): Promise<IntegrationConfig | undefined>;
  getAllIntegrationConfigs(): Promise<IntegrationConfig[]>;
  createIntegrationConfig(config: InsertIntegrationConfig): Promise<IntegrationConfig>;
  updateIntegrationConfig(id: number, updates: Partial<InsertIntegrationConfig>): Promise<IntegrationConfig | undefined>;
  getAllUsers(filters?: UserFilters, pagination?: PaginationOptions): Promise<{users: User[], total: number}>;
  getUsersByRole(role: RoleType): Promise<User[]>;
  
  // Admin auth methods
  createAdminSession(session: InsertAdminSession): Promise<AdminSession>;
  getAdminSessionByToken(token: string): Promise<AdminSession | undefined>;
  deleteAdminSession(token: string): Promise<boolean>;
  deleteExpiredAdminSessions(): Promise<void>;
  
  // Enhanced service signup methods
  createServiceSignup(signup: InsertServiceSignup): Promise<ServiceSignup>;
  getServiceSignup(id: number): Promise<ServiceSignup | undefined>;
  getAllServiceSignups(filters?: CustomerFilters, pagination?: PaginationOptions): Promise<{signups: ServiceSignup[], total: number}>;
  updateServiceSignup(id: number, updates: Partial<InsertServiceSignup>): Promise<ServiceSignup | undefined>;
  
  // Enhanced eSIM callback methods
  createEsimCallback(callback: InsertEsimCallback): Promise<EsimCallback>;
  getEsimCallback(id: number): Promise<EsimCallback | undefined>;
  getAllEsimCallbacks(filters?: CustomerFilters, pagination?: PaginationOptions): Promise<{callbacks: EsimCallback[], total: number}>;
  updateEsimCallback(id: number, updates: Partial<InsertEsimCallback>): Promise<EsimCallback | undefined>;
  
  // Enhanced IPTV (QwickTV) signup methods
  createIptvSignup(signup: InsertIptvSignup): Promise<IptvSignup>;
  getIptvSignup(id: number): Promise<IptvSignup | undefined>;
  getAllIptvSignups(filters?: CustomerFilters, pagination?: PaginationOptions): Promise<{signups: IptvSignup[], total: number}>;
  updateIptvSignup(id: number, updates: Partial<InsertIptvSignup>): Promise<IptvSignup | undefined>;
  
  // Email template methods
  createEmailTemplate(template: InsertEmailTemplate): Promise<EmailTemplate>;
  getEmailTemplate(id: number): Promise<EmailTemplate | undefined>;
  getAllEmailTemplates(active?: boolean): Promise<EmailTemplate[]>;
  updateEmailTemplate(id: number, updates: Partial<InsertEmailTemplate>): Promise<EmailTemplate | undefined>;
  deleteEmailTemplate(id: number): Promise<boolean>;
  
  // Customer communication methods
  createCustomerCommunication(communication: InsertCustomerCommunication): Promise<CustomerCommunication>;
  getCustomerCommunication(id: number): Promise<CustomerCommunication | undefined>;
  getCustomerCommunicationsByCustomer(customerId: number, customerType: string): Promise<CustomerCommunication[]>;
  getAllCustomerCommunications(filters?: {type?: string, dateFrom?: Date, dateTo?: Date}, pagination?: PaginationOptions): Promise<{communications: CustomerCommunication[], total: number}>;
  
  // Task management methods
  createCustomerTask(task: InsertCustomerTask): Promise<CustomerTask>;
  getCustomerTask(id: number): Promise<CustomerTask | undefined>;
  getCustomerTasksByAssignee(userId: number, filters?: TaskFilters): Promise<CustomerTask[]>;
  getCustomerTasksByCustomer(customerId: number, customerType: string): Promise<CustomerTask[]>;
  getAllCustomerTasks(filters?: TaskFilters, pagination?: PaginationOptions): Promise<{tasks: CustomerTask[], total: number}>;
  updateCustomerTask(id: number, updates: Partial<InsertCustomerTask>): Promise<CustomerTask | undefined>;
  completeCustomerTask(id: number, completionNotes?: string): Promise<CustomerTask | undefined>;
  
  // Task comments methods
  addTaskComment(comment: InsertTaskComment): Promise<TaskComment>;
  getTaskComments(taskId: number): Promise<TaskComment[]>;
  
  // Customer status history methods
  addCustomerStatusHistory(statusHistory: InsertCustomerStatusHistory): Promise<CustomerStatusHistory>;
  getCustomerStatusHistory(customerId: number, customerType: string): Promise<CustomerStatusHistory[]>;
  
  // Bulk operations
  bulkUpdateTaskStatus(taskIds: number[], status: StatusType): Promise<number>; // Returns count of updated tasks
  bulkAssignTasks(taskIds: number[], assignedToId: number): Promise<number>; // Returns count of assigned tasks
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private serviceSignups: Map<number, ServiceSignup>;
  private esimCallbacks: Map<number, EsimCallback>;
  private adminSessions: Map<string, AdminSession>;
  private iptvSignups: Map<number, IptvSignup>;
  private emailTemplates: Map<number, EmailTemplate>;
  private customerCommunications: Map<number, CustomerCommunication>;
  private customerTasks: Map<number, CustomerTask>;
  private taskComments: Map<number, TaskComment>;
  private customerStatusHistory: Map<number, CustomerStatusHistory>;
  private integrationConfigs: Map<number, IntegrationConfig>;
  
  private userCurrentId: number;
  private serviceSignupCurrentId: number;
  private esimCallbackCurrentId: number;
  private adminSessionCurrentId: number;
  private iptvSignupCurrentId: number;
  private emailTemplateCurrentId: number;
  private customerCommunicationCurrentId: number;
  private customerTaskCurrentId: number;
  private taskCommentCurrentId: number;
  private customerStatusHistoryCurrentId: number;
  private integrationConfigCurrentId: number;

  constructor() {
    this.users = new Map();
    this.serviceSignups = new Map();
    this.esimCallbacks = new Map();
    this.adminSessions = new Map();
    this.iptvSignups = new Map();
    this.emailTemplates = new Map();
    this.customerCommunications = new Map();
    this.customerTasks = new Map();
    this.taskComments = new Map();
    this.customerStatusHistory = new Map();
    this.integrationConfigs = new Map();
    
    this.userCurrentId = 1;
    this.serviceSignupCurrentId = 1;
    this.esimCallbackCurrentId = 1;
    this.adminSessionCurrentId = 1;
    this.iptvSignupCurrentId = 1;
    this.emailTemplateCurrentId = 1;
    this.customerCommunicationCurrentId = 1;
    this.customerTaskCurrentId = 1;
    this.taskCommentCurrentId = 1;
    this.customerStatusHistoryCurrentId = 1;
    this.integrationConfigCurrentId = 1;
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const now = new Date();
    const user: User = { 
      ...insertUser, 
      id,
      createdAt: now,
      updatedAt: now,
      firstName: insertUser.firstName || null,
      lastName: insertUser.lastName || null,
      email: insertUser.email || null,
      role: insertUser.role || "analyst",
      isActive: insertUser.isActive ?? true,
      isAdmin: insertUser.isAdmin || false,
      twoFactorSecret: insertUser.twoFactorSecret || null,
      twoFactorEnabled: insertUser.twoFactorEnabled || false,
      avatarUrl: insertUser.avatarUrl || null,
      lastLogin: null,
      permissions: insertUser.permissions || {}
    };
    this.users.set(id, user);
    return user;
  }
  
  async getAllUsers(filters?: UserFilters, pagination?: PaginationOptions): Promise<{users: User[], total: number}> {
    let users = Array.from(this.users.values());
    
    // Apply filters if provided
    if (filters) {
      if (filters.role) {
        users = users.filter(user => user.role === filters.role);
      }
      
      if (filters.isActive !== undefined) {
        users = users.filter(user => user.isActive === filters.isActive);
      }
      
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        users = users.filter(user => 
          (user.firstName && user.firstName.toLowerCase().includes(searchLower)) ||
          (user.lastName && user.lastName.toLowerCase().includes(searchLower)) ||
          (user.email && user.email.toLowerCase().includes(searchLower)) ||
          user.username.toLowerCase().includes(searchLower)
        );
      }
    }
    
    // Get total count before pagination
    const total = users.length;
    
    // Apply pagination if provided
    if (pagination) {
      const start = (pagination.page - 1) * pagination.limit;
      const end = start + pagination.limit;
      users = users.slice(start, end);
    }
    
    return { users, total };
  }
  
  async getUsersByRole(role: RoleType): Promise<User[]> {
    return Array.from(this.users.values()).filter(user => user.role === role);
  }
  
  async updateUser(id: number, updates: Partial<InsertUser>): Promise<User | undefined> {
    const user = await this.getUser(id);
    if (!user) return undefined;
    
    const updatedUser: User = {
      ...user,
      ...updates,
      updatedAt: new Date()
    };
    
    this.users.set(id, updatedUser);
    return updatedUser;
  }
  
  async deleteUser(username: string): Promise<boolean> {
    const user = await this.getUserByUsername(username);
    if (!user) return false;
    
    // Delete any associated admin sessions
    Array.from(this.adminSessions.entries()).forEach(([token, session]) => {
      if (session.userId === user.id) {
        this.adminSessions.delete(token);
      }
    });
    
    // Delete the user
    return this.users.delete(user.id);
  }
  
  // Admin session methods
  async createAdminSession(session: InsertAdminSession): Promise<AdminSession> {
    const id = this.adminSessionCurrentId++;
    const now = new Date();
    
    if (!session.userId) {
      throw new Error('userId is required for admin session');
    }
    
    const adminSession: AdminSession = {
      id,
      userId: session.userId,
      token: session.token,
      expiresAt: session.expiresAt,
      createdAt: now
    };
    
    this.adminSessions.set(session.token, adminSession);
    return adminSession;
  }
  
  async getAdminSessionByToken(token: string): Promise<AdminSession | undefined> {
    return this.adminSessions.get(token);
  }
  
  async deleteAdminSession(token: string): Promise<boolean> {
    return this.adminSessions.delete(token);
  }
  
  async deleteExpiredAdminSessions(): Promise<void> {
    const now = new Date();
    
    // Use Array.from to iterate over entries to avoid downlevelIteration issue
    Array.from(this.adminSessions.entries()).forEach(([token, session]) => {
      if (new Date(session.expiresAt) < now) {
        this.adminSessions.delete(token);
      }
    });
  }
  
  // Service signup methods
  async createServiceSignup(signup: InsertServiceSignup): Promise<ServiceSignup> {
    const id = this.serviceSignupCurrentId++;
    const now = new Date();
    
    // Convert arrays stored as strings to actual strings
    const processedSignup = {
      ...signup,
      // Make sure all required fields are present
      additionalEquipment: signup.additionalEquipment || null,
      streamingServices: signup.streamingServices || null,
      email: signup.email || null,
      preferredProvider: signup.preferredProvider || null,
      specialRequests: signup.specialRequests || null,
    };
    
    const serviceSignup = {
      ...processedSignup,
      id,
      createdAt: now
    };
    
    this.serviceSignups.set(id, serviceSignup as ServiceSignup);
    return serviceSignup as ServiceSignup;
  }

  async getServiceSignup(id: number): Promise<ServiceSignup | undefined> {
    return this.serviceSignups.get(id);
  }

  async getAllServiceSignups(filters?: CustomerFilters, pagination?: PaginationOptions): Promise<{signups: ServiceSignup[], total: number}> {
    let signups = Array.from(this.serviceSignups.values());
    
    // Apply filters if provided
    if (filters) {
      // Add status filter when we add status to service signups
      
      // Filter by date range
      if (filters.dateFrom) {
        signups = signups.filter(signup => 
          signup.createdAt && new Date(signup.createdAt) >= new Date(filters.dateFrom!)
        );
      }
      
      if (filters.dateTo) {
        signups = signups.filter(signup => 
          signup.createdAt && new Date(signup.createdAt) <= new Date(filters.dateTo!)
        );
      }
      
      // Filter by search term
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        signups = signups.filter(signup => 
          (signup.firstName && signup.firstName.toLowerCase().includes(searchLower)) ||
          (signup.lastName && signup.lastName.toLowerCase().includes(searchLower)) ||
          (signup.email && signup.email.toLowerCase().includes(searchLower)) ||
          (signup.phone && signup.phone.toLowerCase().includes(searchLower))
        );
      }
    }
    
    // Get total before pagination
    const total = signups.length;
    
    // Apply pagination if provided
    if (pagination) {
      const start = (pagination.page - 1) * pagination.limit;
      const end = start + pagination.limit;
      signups = signups.slice(start, end);
    }
    
    return { signups, total };
  }
  
  async updateServiceSignup(id: number, updates: Partial<InsertServiceSignup>): Promise<ServiceSignup | undefined> {
    const signup = await this.getServiceSignup(id);
    if (!signup) return undefined;
    
    const updatedSignup: ServiceSignup = {
      ...signup,
      ...updates,
    };
    
    this.serviceSignups.set(id, updatedSignup);
    return updatedSignup;
  }
  
  // eSIM callback methods
  async createEsimCallback(callback: InsertEsimCallback): Promise<EsimCallback> {
    const id = this.esimCallbackCurrentId++;
    const now = new Date();
    const esimCallback = { 
      ...callback, 
      id, 
      createdAt: now 
    };
    this.esimCallbacks.set(id, esimCallback as EsimCallback);
    return esimCallback as EsimCallback;
  }

  async getEsimCallback(id: number): Promise<EsimCallback | undefined> {
    return this.esimCallbacks.get(id);
  }

  async getAllEsimCallbacks(filters?: CustomerFilters, pagination?: PaginationOptions): Promise<{callbacks: EsimCallback[], total: number}> {
    let callbacks = Array.from(this.esimCallbacks.values());
    
    // Apply filters if provided
    if (filters) {
      // Add status filter when we add status to eSIM callbacks
      
      // Filter by date range
      if (filters.dateFrom) {
        callbacks = callbacks.filter(callback => 
          callback.createdAt && new Date(callback.createdAt) >= new Date(filters.dateFrom!)
        );
      }
      
      if (filters.dateTo) {
        callbacks = callbacks.filter(callback => 
          callback.createdAt && new Date(callback.createdAt) <= new Date(filters.dateTo!)
        );
      }
      
      // Filter by search term
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        callbacks = callbacks.filter(callback => 
          (callback.firstName && callback.firstName.toLowerCase().includes(searchLower)) ||
          (callback.lastName && callback.lastName.toLowerCase().includes(searchLower)) ||
          (callback.email && callback.email.toLowerCase().includes(searchLower)) ||
          (callback.phone && callback.phone.toLowerCase().includes(searchLower))
        );
      }
    }
    
    // Get total before pagination
    const total = callbacks.length;
    
    // Apply pagination if provided
    if (pagination) {
      const start = (pagination.page - 1) * pagination.limit;
      const end = start + pagination.limit;
      callbacks = callbacks.slice(start, end);
    }
    
    return { callbacks, total };
  }
  
  async updateEsimCallback(id: number, updates: Partial<InsertEsimCallback>): Promise<EsimCallback | undefined> {
    const callback = await this.getEsimCallback(id);
    if (!callback) return undefined;
    
    const updatedCallback: EsimCallback = {
      ...callback,
      ...updates,
    };
    
    this.esimCallbacks.set(id, updatedCallback);
    return updatedCallback;
  }

  // IPTV signup methods
  async createIptvSignup(signup: InsertIptvSignup): Promise<IptvSignup> {
    const id = this.iptvSignupCurrentId++;
    const now = new Date();
    
    // Process optional fields
    const processedSignup = {
      ...signup,
      planId: signup.planId || null,
      address: signup.address || null,
      deviceCount: signup.deviceCount || null,
      streamingPreferences: signup.streamingPreferences || null,
    };
    
    const iptvSignup = {
      ...processedSignup,
      id,
      createdAt: now
    };
    
    this.iptvSignups.set(id, iptvSignup as IptvSignup);
    return iptvSignup as IptvSignup;
  }

  async getIptvSignup(id: number): Promise<IptvSignup | undefined> {
    return this.iptvSignups.get(id);
  }

  async getAllIptvSignups(filters?: CustomerFilters, pagination?: PaginationOptions): Promise<{signups: IptvSignup[], total: number}> {
    let signups = Array.from(this.iptvSignups.values());
    
    // Apply filters if provided
    if (filters) {
      // Add status filter when we add status to IPTV signups
      
      // Filter by date range
      if (filters.dateFrom) {
        signups = signups.filter(signup => 
          signup.createdAt && new Date(signup.createdAt) >= new Date(filters.dateFrom!)
        );
      }
      
      if (filters.dateTo) {
        signups = signups.filter(signup => 
          signup.createdAt && new Date(signup.createdAt) <= new Date(filters.dateTo!)
        );
      }
      
      // Filter by search term
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        signups = signups.filter(signup => 
          (signup.firstName && signup.firstName.toLowerCase().includes(searchLower)) ||
          (signup.lastName && signup.lastName.toLowerCase().includes(searchLower)) ||
          (signup.email && signup.email.toLowerCase().includes(searchLower)) ||
          (signup.phone && signup.phone.toLowerCase().includes(searchLower))
        );
      }
    }
    
    // Get total before pagination
    const total = signups.length;
    
    // Apply pagination if provided
    if (pagination) {
      const start = (pagination.page - 1) * pagination.limit;
      const end = start + pagination.limit;
      signups = signups.slice(start, end);
    }
    
    return { signups, total };
  }
  
  async updateIptvSignup(id: number, updates: Partial<InsertIptvSignup>): Promise<IptvSignup | undefined> {
    const signup = await this.getIptvSignup(id);
    if (!signup) return undefined;
    
    const updatedSignup: IptvSignup = {
      ...signup,
      ...updates,
    };
    
    this.iptvSignups.set(id, updatedSignup);
    return updatedSignup;
  }
  
  // Email template methods
  async createEmailTemplate(template: InsertEmailTemplate): Promise<EmailTemplate> {
    const id = this.emailTemplateCurrentId++;
    const now = new Date();
    
    const emailTemplate: EmailTemplate = {
      ...template,
      id,
      createdAt: now,
      updatedAt: now
    };
    
    this.emailTemplates.set(id, emailTemplate);
    return emailTemplate;
  }
  
  async getEmailTemplate(id: number): Promise<EmailTemplate | undefined> {
    return this.emailTemplates.get(id);
  }
  
  async getAllEmailTemplates(active?: boolean): Promise<EmailTemplate[]> {
    let templates = Array.from(this.emailTemplates.values());
    
    if (active !== undefined) {
      templates = templates.filter(template => template.isActive === active);
    }
    
    return templates;
  }
  
  async updateEmailTemplate(id: number, updates: Partial<InsertEmailTemplate>): Promise<EmailTemplate | undefined> {
    const template = await this.getEmailTemplate(id);
    if (!template) return undefined;
    
    const updatedTemplate: EmailTemplate = {
      ...template,
      ...updates,
      updatedAt: new Date()
    };
    
    this.emailTemplates.set(id, updatedTemplate);
    return updatedTemplate;
  }
  
  async deleteEmailTemplate(id: number): Promise<boolean> {
    return this.emailTemplates.delete(id);
  }
  
  // Integration configuration methods
  async getIntegrationConfig(type: string): Promise<IntegrationConfig | undefined> {
    return Array.from(this.integrationConfigs.values()).find(
      (config) => config.type === type && config.isActive
    );
  }
  
  async getAllIntegrationConfigs(): Promise<IntegrationConfig[]> {
    return Array.from(this.integrationConfigs.values());
  }
  
  async createIntegrationConfig(config: InsertIntegrationConfig): Promise<IntegrationConfig> {
    const id = this.integrationConfigCurrentId++;
    const now = new Date();
    
    const integrationConfig: IntegrationConfig = {
      ...config,
      id,
      createdAt: now,
      updatedAt: now,
      serviceSignupWebhook: config.serviceSignupWebhook || null,
      esimCallbackWebhook: config.esimCallbackWebhook || null,
      iptvSignupWebhook: config.iptvSignupWebhook || null,
      apiKey: config.apiKey || null,
      isActive: config.isActive ?? true,
      lastModifiedById: config.lastModifiedById || null
    };
    
    this.integrationConfigs.set(id, integrationConfig);
    return integrationConfig;
  }
  
  async updateIntegrationConfig(id: number, updates: Partial<InsertIntegrationConfig>): Promise<IntegrationConfig | undefined> {
    const config = this.integrationConfigs.get(id);
    if (!config) return undefined;
    
    const updatedConfig: IntegrationConfig = {
      ...config,
      ...updates,
      updatedAt: new Date()
    };
    
    this.integrationConfigs.set(id, updatedConfig);
    return updatedConfig;
  }
  
  // Customer communication methods
  async createCustomerCommunication(communication: InsertCustomerCommunication): Promise<CustomerCommunication> {
    const id = this.customerCommunicationCurrentId++;
    const now = new Date();
    
    const customerCommunication: CustomerCommunication = {
      ...communication,
      id,
      createdAt: now
    };
    
    this.customerCommunications.set(id, customerCommunication);
    return customerCommunication;
  }
  
  async getCustomerCommunication(id: number): Promise<CustomerCommunication | undefined> {
    return this.customerCommunications.get(id);
  }
  
  async getCustomerCommunicationsByCustomer(customerId: number, customerType: string): Promise<CustomerCommunication[]> {
    return Array.from(this.customerCommunications.values())
      .filter(comm => comm.customerId === customerId && comm.customerType === customerType)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }
  
  async getAllCustomerCommunications(filters?: {type?: string, dateFrom?: Date, dateTo?: Date}, pagination?: PaginationOptions): Promise<{communications: CustomerCommunication[], total: number}> {
    let communications = Array.from(this.customerCommunications.values());
    
    // Apply filters if provided
    if (filters) {
      if (filters.type) {
        communications = communications.filter(comm => comm.type === filters.type);
      }
      
      if (filters.dateFrom) {
        communications = communications.filter(comm => 
          comm.createdAt && new Date(comm.createdAt) >= new Date(filters.dateFrom!)
        );
      }
      
      if (filters.dateTo) {
        communications = communications.filter(comm => 
          comm.createdAt && new Date(comm.createdAt) <= new Date(filters.dateTo!)
        );
      }
    }
    
    // Sort by date descending
    communications = communications.sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
    
    // Get total before pagination
    const total = communications.length;
    
    // Apply pagination if provided
    if (pagination) {
      const start = (pagination.page - 1) * pagination.limit;
      const end = start + pagination.limit;
      communications = communications.slice(start, end);
    }
    
    return { communications, total };
  }
  
  // Task management methods
  async createCustomerTask(task: InsertCustomerTask): Promise<CustomerTask> {
    const id = this.customerTaskCurrentId++;
    const now = new Date();
    
    const customerTask: CustomerTask = {
      ...task,
      id,
      createdAt: now,
      updatedAt: now,
      completedAt: null
    };
    
    this.customerTasks.set(id, customerTask);
    return customerTask;
  }
  
  async getCustomerTask(id: number): Promise<CustomerTask | undefined> {
    return this.customerTasks.get(id);
  }
  
  async getCustomerTasksByAssignee(userId: number, filters?: TaskFilters): Promise<CustomerTask[]> {
    let tasks = Array.from(this.customerTasks.values())
      .filter(task => task.assignedToId === userId);
    
    // Apply additional filters if provided
    if (filters) {
      if (filters.status) {
        tasks = tasks.filter(task => task.status === filters.status);
      }
      
      if (filters.priority) {
        tasks = tasks.filter(task => task.priority === filters.priority);
      }
      
      if (filters.dateFrom) {
        tasks = tasks.filter(task => 
          task.createdAt && new Date(task.createdAt) >= new Date(filters.dateFrom!)
        );
      }
      
      if (filters.dateTo) {
        tasks = tasks.filter(task => 
          task.createdAt && new Date(task.createdAt) <= new Date(filters.dateTo!)
        );
      }
      
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        tasks = tasks.filter(task => 
          (task.title && task.title.toLowerCase().includes(searchLower)) ||
          (task.description && task.description.toLowerCase().includes(searchLower))
        );
      }
    }
    
    // Sort by priority (high to low) and due date (most urgent first)
    tasks = tasks.sort((a, b) => {
      // First by priority
      const priorityOrder = { urgent: 0, high: 1, medium: 2, low: 3 };
      const priorityDiff = (priorityOrder[a.priority as keyof typeof priorityOrder] || 999) - 
                          (priorityOrder[b.priority as keyof typeof priorityOrder] || 999);
      
      if (priorityDiff !== 0) return priorityDiff;
      
      // Then by due date
      if (a.dueDate && b.dueDate) {
        return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
      } else if (a.dueDate) {
        return -1; // a has due date, b doesn't
      } else if (b.dueDate) {
        return 1; // b has due date, a doesn't
      }
      
      // Finally by creation date (newer first)
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
    
    return tasks;
  }
  
  async getCustomerTasksByCustomer(customerId: number, customerType: string): Promise<CustomerTask[]> {
    return Array.from(this.customerTasks.values())
      .filter(task => task.customerId === customerId && task.customerType === customerType)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }
  
  async getAllCustomerTasks(filters?: TaskFilters, pagination?: PaginationOptions): Promise<{tasks: CustomerTask[], total: number}> {
    let tasks = Array.from(this.customerTasks.values());
    
    // Apply filters if provided
    if (filters) {
      if (filters.status) {
        tasks = tasks.filter(task => task.status === filters.status);
      }
      
      if (filters.priority) {
        tasks = tasks.filter(task => task.priority === filters.priority);
      }
      
      if (filters.assignedToId) {
        tasks = tasks.filter(task => task.assignedToId === filters.assignedToId);
      }
      
      if (filters.dateFrom) {
        tasks = tasks.filter(task => 
          task.createdAt && new Date(task.createdAt) >= new Date(filters.dateFrom!)
        );
      }
      
      if (filters.dateTo) {
        tasks = tasks.filter(task => 
          task.createdAt && new Date(task.createdAt) <= new Date(filters.dateTo!)
        );
      }
      
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        tasks = tasks.filter(task => 
          (task.title && task.title.toLowerCase().includes(searchLower)) ||
          (task.description && task.description.toLowerCase().includes(searchLower))
        );
      }
    }
    
    // Sort by status (new first), then priority, then due date
    tasks = tasks.sort((a, b) => {
      // Status order: new, in_progress, contacted, resolved, canceled
      const statusOrder = { new: 0, in_progress: 1, contacted: 2, resolved: 3, canceled: 4 };
      const statusDiff = (statusOrder[a.status as keyof typeof statusOrder] || 999) - 
                        (statusOrder[b.status as keyof typeof statusOrder] || 999);
      
      if (statusDiff !== 0) return statusDiff;
      
      // Then by priority
      const priorityOrder = { urgent: 0, high: 1, medium: 2, low: 3 };
      const priorityDiff = (priorityOrder[a.priority as keyof typeof priorityOrder] || 999) - 
                          (priorityOrder[b.priority as keyof typeof priorityOrder] || 999);
      
      if (priorityDiff !== 0) return priorityDiff;
      
      // Then by due date
      if (a.dueDate && b.dueDate) {
        return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
      } else if (a.dueDate) {
        return -1;
      } else if (b.dueDate) {
        return 1;
      }
      
      // Finally by creation date (newer first)
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
    
    // Get total before pagination
    const total = tasks.length;
    
    // Apply pagination if provided
    if (pagination) {
      const start = (pagination.page - 1) * pagination.limit;
      const end = start + pagination.limit;
      tasks = tasks.slice(start, end);
    }
    
    return { tasks, total };
  }
  
  async updateCustomerTask(id: number, updates: Partial<InsertCustomerTask>): Promise<CustomerTask | undefined> {
    const task = await this.getCustomerTask(id);
    if (!task) return undefined;
    
    const updatedTask: CustomerTask = {
      ...task,
      ...updates,
      updatedAt: new Date()
    };
    
    this.customerTasks.set(id, updatedTask);
    return updatedTask;
  }
  
  async completeCustomerTask(id: number, completionNotes?: string): Promise<CustomerTask | undefined> {
    const task = await this.getCustomerTask(id);
    if (!task) return undefined;
    
    const completedTask: CustomerTask = {
      ...task,
      status: "resolved",
      completedAt: new Date(),
      notes: completionNotes ? `${task.notes ? task.notes + '\n\n' : ''}Completion: ${completionNotes}` : task.notes,
      updatedAt: new Date()
    };
    
    this.customerTasks.set(id, completedTask);
    return completedTask;
  }
  
  // Task comments methods
  async addTaskComment(comment: InsertTaskComment): Promise<TaskComment> {
    const id = this.taskCommentCurrentId++;
    const now = new Date();
    
    const taskComment: TaskComment = {
      ...comment,
      id,
      createdAt: now
    };
    
    this.taskComments.set(id, taskComment);
    return taskComment;
  }
  
  async getTaskComments(taskId: number): Promise<TaskComment[]> {
    return Array.from(this.taskComments.values())
      .filter(comment => comment.taskId === taskId)
      .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
  }
  
  // Customer status history methods
  async addCustomerStatusHistory(statusHistory: InsertCustomerStatusHistory): Promise<CustomerStatusHistory> {
    const id = this.customerStatusHistoryCurrentId++;
    const now = new Date();
    
    const history: CustomerStatusHistory = {
      ...statusHistory,
      id,
      createdAt: now
    };
    
    this.customerStatusHistory.set(id, history);
    return history;
  }
  
  async getCustomerStatusHistory(customerId: number, customerType: string): Promise<CustomerStatusHistory[]> {
    return Array.from(this.customerStatusHistory.values())
      .filter(history => history.customerId === customerId && history.customerType === customerType)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }
  
  // Bulk operations
  async bulkUpdateTaskStatus(taskIds: number[], status: StatusType): Promise<number> {
    let updatedCount = 0;
    
    for (const id of taskIds) {
      const task = await this.getCustomerTask(id);
      if (task) {
        const updatedTask: CustomerTask = {
          ...task,
          status,
          updatedAt: new Date(),
          // If status is "resolved", set completedAt
          completedAt: status === "resolved" ? new Date() : task.completedAt
        };
        
        this.customerTasks.set(id, updatedTask);
        updatedCount++;
      }
    }
    
    return updatedCount;
  }
  
  async bulkAssignTasks(taskIds: number[], assignedToId: number): Promise<number> {
    let assignedCount = 0;
    
    for (const id of taskIds) {
      const task = await this.getCustomerTask(id);
      if (task) {
        const updatedTask: CustomerTask = {
          ...task,
          assignedToId,
          updatedAt: new Date()
        };
        
        this.customerTasks.set(id, updatedTask);
        assignedCount++;
      }
    }
    
    return assignedCount;
  }
}

import { drizzle } from 'drizzle-orm/neon-http';
import { neon, neonConfig } from '@neondatabase/serverless';

// Class to implement storage using PostgreSQL
export class PostgresStorage implements IStorage {
  private db: any;
  private sql: any;

  constructor() {
    // Initialize the neon client with the DATABASE_URL
    const DATABASE_URL = process.env.DATABASE_URL;
    if (!DATABASE_URL) {
      throw new Error('DATABASE_URL is not defined');
    }
    
    // Configure Neon
    neonConfig.fetchConnectionCache = true;
    
    // Create the SQL tag
    this.sql = neon(DATABASE_URL);
    
    // Create Drizzle instance
    this.db = drizzle(this.sql, { 
      schema: { 
        users, 
        adminSessions, 
        serviceSignups, 
        esimCallbacks, 
        iptvSignups,
        emailTemplates,
        customerCommunications,
        customerTasks,
        taskComments,
        customerStatusHistory
      } 
    });
    
    // Check tables
    this.initDb();
  }

  private async initDb() {
    try {
      // Check if tables exist using the SQL tag
      const tablesResult = await this.sql`
        SELECT table_name 
        FROM information_schema.tables 
        WHERE table_schema = 'public'
      `;
      
      console.log('Existing tables:', tablesResult.map((t: any) => t.table_name));
      
      // We'll let drizzle-kit push handle the schema
    } catch (error) {
      console.error('Error initializing database:', error);
    }
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    try {
      // Use eq() to ensure proper SQL parameter type handling
      const results = await this.db.select().from(users)
        .where(eq(users.id, id))
        .limit(1);
      
      return results.length > 0 ? results[0] : undefined;
    } catch (error) {
      console.error('Error getting user:', error);
      return undefined;
    }
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    try {
      // Use eq() to ensure proper SQL parameter type handling
      console.log(`Looking up user by username: ${username}`);
      const results = await this.db.select().from(users)
        .where(eq(users.username, username))
        .limit(1);
      
      console.log(`Found ${results.length} users with username: ${username}`);
      return results.length > 0 ? results[0] : undefined;
    } catch (error) {
      console.error('Error getting user by username:', error);
      return undefined;
    }
  }

  async createUser(user: InsertUser): Promise<User> {
    try {
      // Use the SQL tag directly for inserting users
      const results = await this.sql`
        INSERT INTO users (
          username, 
          password, 
          first_name, 
          last_name, 
          email, 
          role,
          is_active,
          is_admin, 
          two_factor_secret,
          two_factor_enabled,
          avatar_url,
          permissions
        ) 
        VALUES (
          ${user.username}, 
          ${user.password}, 
          ${user.firstName || null}, 
          ${user.lastName || null}, 
          ${user.email || null}, 
          ${user.role || "analyst"},
          ${user.isActive === undefined ? true : user.isActive},
          ${user.isAdmin || false}, 
          ${user.twoFactorSecret || null},
          ${user.twoFactorEnabled || false},
          ${user.avatarUrl || null},
          ${user.permissions || {}}
        )
        RETURNING *
      `;
      return results[0];
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }
  
  async getAllUsers(filters?: UserFilters, pagination?: PaginationOptions): Promise<{users: User[], total: number}> {
    try {
      // First, get the total count
      let countQuery = `SELECT COUNT(*) FROM users WHERE 1=1`;
      let queryParams: any[] = [];
      let paramCounter = 1;
      
      if (filters) {
        if (filters.role) {
          countQuery += ` AND role = $${paramCounter}`;
          queryParams.push(filters.role);
          paramCounter++;
        }
        
        if (filters.isActive !== undefined) {
          countQuery += ` AND is_active = $${paramCounter}`;
          queryParams.push(filters.isActive);
          paramCounter++;
        }
        
        if (filters.search) {
          countQuery += ` AND (
            first_name ILIKE $${paramCounter} OR 
            last_name ILIKE $${paramCounter} OR 
            email ILIKE $${paramCounter} OR 
            username ILIKE $${paramCounter}
          )`;
          queryParams.push(`%${filters.search}%`);
          paramCounter++;
        }
      }
      
      const countResult = await this.sql.query(countQuery, queryParams);
      const total = parseInt(countResult.rows[0].count);
      
      // Now get the filtered, paginated users
      let query = `
        SELECT * FROM users 
        WHERE 1=1
      `;
      
      // Reset params for the main query
      queryParams = [];
      paramCounter = 1;
      
      if (filters) {
        if (filters.role) {
          query += ` AND role = $${paramCounter}`;
          queryParams.push(filters.role);
          paramCounter++;
        }
        
        if (filters.isActive !== undefined) {
          query += ` AND is_active = $${paramCounter}`;
          queryParams.push(filters.isActive);
          paramCounter++;
        }
        
        if (filters.search) {
          query += ` AND (
            first_name ILIKE $${paramCounter} OR 
            last_name ILIKE $${paramCounter} OR 
            email ILIKE $${paramCounter} OR 
            username ILIKE $${paramCounter}
          )`;
          queryParams.push(`%${filters.search}%`);
          paramCounter++;
        }
      }
      
      query += ` ORDER BY created_at DESC`;
      
      if (pagination) {
        query += ` LIMIT $${paramCounter} OFFSET $${paramCounter + 1}`;
        queryParams.push(pagination.limit, (pagination.page - 1) * pagination.limit);
      }
      
      const usersResult = await this.sql.query(query, queryParams);
      return { users: usersResult.rows, total };
    } catch (error) {
      console.error('Error getting users:', error);
      return { users: [], total: 0 };
    }
  }
  
  async getUsersByRole(role: RoleType): Promise<User[]> {
    try {
      const results = await this.sql`
        SELECT * FROM users WHERE role = ${role} ORDER BY created_at DESC
      `;
      return results;
    } catch (error) {
      console.error('Error getting users by role:', error);
      return [];
    }
  }

  async updateUser(id: number, updates: Partial<InsertUser>): Promise<User | undefined> {
    try {
      console.log('Updating user', id, 'with', updates);
      // Check if there are any updates to apply
      if (Object.keys(updates).length === 0) {
        console.log('No updates to apply for user', id);
        // Just return the current user
        return this.getUser(id);
      }
      
      // Use eq() to ensure proper SQL parameter type handling
      const results = await this.db.update(users)
        .set(updates)
        .where(eq(users.id, id))
        .returning();
      
      return results.length > 0 ? results[0] : undefined;
    } catch (error) {
      console.error('Error updating user:', error);
      return undefined;
    }
  }

  async deleteUser(username: string): Promise<boolean> {
    try {
      const user = await this.getUserByUsername(username);
      if (!user) return false;
      
      // Use eq() for proper SQL parameter type handling
      await this.db.delete(users).where(eq(users.id, user.id));
      console.log(`Deleted user with id ${user.id} and username ${username}`);
      return true;
    } catch (error) {
      console.error('Error deleting user:', error);
      return false;
    }
  }

  // Admin session methods
  async createAdminSession(session: InsertAdminSession): Promise<AdminSession> {
    try {
      const results = await this.db.insert(adminSessions).values(session).returning();
      return results[0];
    } catch (error) {
      console.error('Error creating admin session:', error);
      throw error;
    }
  }

  async getAdminSessionByToken(token: string): Promise<AdminSession | undefined> {
    try {
      // We use eq() to ensure the token is compared as a string
      // This avoids the issue with the token being interpreted as an object
      const results = await this.db.select().from(adminSessions)
        .where(eq(adminSessions.token, token))
        .limit(1);
      
      console.log(`Session lookup for token ${token.substring(0, 10)}... found ${results.length} results`);
      return results.length > 0 ? results[0] : undefined;
    } catch (error) {
      console.error('Error getting admin session:', error);
      return undefined;
    }
  }

  async deleteAdminSession(token: string): Promise<boolean> {
    try {
      // Use eq() to ensure the token is compared as a string
      await this.db.delete(adminSessions).where(eq(adminSessions.token, token));
      console.log(`Deleted session for token ${token.substring(0, 10)}...`);
      return true;
    } catch (error) {
      console.error('Error deleting admin session:', error);
      return false;
    }
  }

  async deleteExpiredAdminSessions(): Promise<void> {
    try {
      await this.db.delete(adminSessions).where({ expiresAt: { lt: new Date() } });
    } catch (error) {
      console.error('Error deleting expired admin sessions:', error);
    }
  }

  // Service signup methods
  async createServiceSignup(signup: InsertServiceSignup): Promise<ServiceSignup> {
    try {
      const results = await this.db.insert(serviceSignups).values(signup).returning();
      return results[0];
    } catch (error) {
      console.error('Error creating service signup:', error);
      throw error;
    }
  }

  async getServiceSignup(id: number): Promise<ServiceSignup | undefined> {
    try {
      const results = await this.db.select().from(serviceSignups).where({ id }).limit(1);
      return results.length > 0 ? results[0] : undefined;
    } catch (error) {
      console.error('Error getting service signup:', error);
      return undefined;
    }
  }

  async getAllServiceSignups(filters?: CustomerFilters, pagination?: PaginationOptions): Promise<{signups: ServiceSignup[], total: number}> {
    try {
      // Use Drizzle's query builder for better reliability
      let query = this.db.select().from(serviceSignups);
      let countQuery = this.db.select({ count: count() }).from(serviceSignups);
      
      // Apply filters if provided
      if (filters) {
        // Status filtering removed - no status column yet in this table
        
        // Filter by date range if provided
        if (filters.dateFrom) {
          const dateFromCondition = gte(serviceSignups.createdAt, new Date(filters.dateFrom));
          query = query.where(dateFromCondition);
          countQuery = countQuery.where(dateFromCondition);
        }
        
        if (filters.dateTo) {
          const dateToCondition = lte(serviceSignups.createdAt, new Date(filters.dateTo));
          query = query.where(dateToCondition);
          countQuery = countQuery.where(dateToCondition);
        }
        
        // Search is complex for SQL, let's skip it for now
        // We'll implement it properly later
      }
      
      // Add ordering
      query = query.orderBy(desc(serviceSignups.createdAt));
      
      // Add pagination if provided
      if (pagination) {
        query = query.limit(pagination.limit).offset((pagination.page - 1) * pagination.limit);
      }
      
      // Execute the queries
      const [signupResults, countResults] = await Promise.all([
        query,
        countQuery
      ]);
      
      const total = countResults[0]?.count || 0;
      
      return { 
        signups: signupResults, 
        total: Number(total) 
      };
    } catch (error) {
      console.error('Error getting service signups:', error);
      return { signups: [], total: 0 };
    }
  }
  
  async updateServiceSignup(id: number, updates: Partial<InsertServiceSignup>): Promise<ServiceSignup | undefined> {
    try {
      const results = await this.db.update(serviceSignups).set(updates).where({ id }).returning();
      return results.length > 0 ? results[0] : undefined;
    } catch (error) {
      console.error('Error updating service signup:', error);
      return undefined;
    }
  }

  // eSIM callback methods
  async createEsimCallback(callback: InsertEsimCallback): Promise<EsimCallback> {
    try {
      const results = await this.db.insert(esimCallbacks).values(callback).returning();
      return results[0];
    } catch (error) {
      console.error('Error creating eSIM callback:', error);
      throw error;
    }
  }

  async getEsimCallback(id: number): Promise<EsimCallback | undefined> {
    try {
      const results = await this.db.select().from(esimCallbacks).where({ id }).limit(1);
      return results.length > 0 ? results[0] : undefined;
    } catch (error) {
      console.error('Error getting eSIM callback:', error);
      return undefined;
    }
  }

  async getAllEsimCallbacks(filters?: CustomerFilters, pagination?: PaginationOptions): Promise<{callbacks: EsimCallback[], total: number}> {
    try {
      // Use Drizzle's query builder for better reliability
      let query = this.db.select().from(esimCallbacks);
      let countQuery = this.db.select({ count: count() }).from(esimCallbacks);
      
      // Apply filters if provided
      if (filters) {
        // Filter by date range if provided
        if (filters.dateFrom) {
          const dateFromCondition = gte(esimCallbacks.createdAt, new Date(filters.dateFrom));
          query = query.where(dateFromCondition);
          countQuery = countQuery.where(dateFromCondition);
        }
        
        if (filters.dateTo) {
          const dateToCondition = lte(esimCallbacks.createdAt, new Date(filters.dateTo));
          query = query.where(dateToCondition);
          countQuery = countQuery.where(dateToCondition);
        }
        
        // Search is complex for SQL, let's skip it for now
        // We'll implement it properly later
      }
      
      // Add ordering
      query = query.orderBy(desc(esimCallbacks.createdAt));
      
      // Add pagination if provided
      if (pagination) {
        query = query.limit(pagination.limit).offset((pagination.page - 1) * pagination.limit);
      }
      
      // Execute the queries
      const [callbackResults, countResults] = await Promise.all([
        query,
        countQuery
      ]);
      
      const total = countResults[0]?.count || 0;
      
      return { 
        callbacks: callbackResults, 
        total: Number(total) 
      };
    } catch (error) {
      console.error('Error getting esim callbacks:', error);
      return { callbacks: [], total: 0 };
    }
  }
  
  async updateEsimCallback(id: number, updates: Partial<InsertEsimCallback>): Promise<EsimCallback | undefined> {
    try {
      const results = await this.db.update(esimCallbacks).set(updates).where({ id }).returning();
      return results.length > 0 ? results[0] : undefined;
    } catch (error) {
      console.error('Error updating esim callback:', error);
      return undefined;
    }
  }

  // IPTV signup methods
  async createIptvSignup(signup: InsertIptvSignup): Promise<IptvSignup> {
    try {
      const results = await this.db.insert(iptvSignups).values(signup).returning();
      return results[0];
    } catch (error) {
      console.error('Error creating IPTV signup:', error);
      throw error;
    }
  }

  async getIptvSignup(id: number): Promise<IptvSignup | undefined> {
    try {
      const results = await this.db.select().from(iptvSignups).where({ id }).limit(1);
      return results.length > 0 ? results[0] : undefined;
    } catch (error) {
      console.error('Error getting IPTV signup:', error);
      return undefined;
    }
  }

  async getAllIptvSignups(filters?: CustomerFilters, pagination?: PaginationOptions): Promise<{signups: IptvSignup[], total: number}> {
    try {
      // Use Drizzle's query builder for better reliability
      let query = this.db.select().from(iptvSignups);
      let countQuery = this.db.select({ count: count() }).from(iptvSignups);
      
      // Apply filters if provided
      if (filters) {
        // Filter by date range if provided
        if (filters.dateFrom) {
          const dateFromCondition = gte(iptvSignups.createdAt, new Date(filters.dateFrom));
          query = query.where(dateFromCondition);
          countQuery = countQuery.where(dateFromCondition);
        }
        
        if (filters.dateTo) {
          const dateToCondition = lte(iptvSignups.createdAt, new Date(filters.dateTo));
          query = query.where(dateToCondition);
          countQuery = countQuery.where(dateToCondition);
        }
        
        // Filter by search term
        if (filters.search) {
          const searchTerm = `%${filters.search}%`;
          const searchCondition = or(
            ilike(iptvSignups.firstName, searchTerm),
            ilike(iptvSignups.lastName, searchTerm),
            ilike(iptvSignups.email, searchTerm),
            ilike(iptvSignups.phone, searchTerm)
          );
          query = query.where(searchCondition);
          countQuery = countQuery.where(searchCondition);
        }
      }
      
      // Add ordering
      query = query.orderBy(desc(iptvSignups.createdAt));
      
      // Add pagination if provided
      if (pagination) {
        query = query.limit(pagination.limit).offset((pagination.page - 1) * pagination.limit);
      }
      
      // Execute the queries
      const [signupResults, countResults] = await Promise.all([
        query,
        countQuery
      ]);
      
      const total = countResults[0]?.count || 0;
      
      return { 
        signups: signupResults, 
        total: Number(total) 
      };
    } catch (error) {
      console.error('Error getting IPTV signups:', error);
      return { signups: [], total: 0 };
    }
  }
  
  async updateIptvSignup(id: number, updates: Partial<InsertIptvSignup>): Promise<IptvSignup | undefined> {
    try {
      const results = await this.db.update(iptvSignups).set(updates).where({ id }).returning();
      return results.length > 0 ? results[0] : undefined;
    } catch (error) {
      console.error('Error updating IPTV signup:', error);
      return undefined;
    }
  }
  
  // Email template methods
  async createEmailTemplate(template: InsertEmailTemplate): Promise<EmailTemplate> {
    try {
      // Ensure all required fields have values
      const emailTemplateData = {
        ...template,
        isActive: template.isActive ?? true,
        createdById: template.createdById ?? null,
        lastModifiedById: template.lastModifiedById ?? null
      };
      
      const results = await this.db.insert(emailTemplates).values(emailTemplateData).returning();
      return results[0];
    } catch (error) {
      console.error('Error creating email template:', error);
      throw error;
    }
  }
  
  async getEmailTemplate(id: number): Promise<EmailTemplate | undefined> {
    try {
      const results = await this.db.select().from(emailTemplates).where({ id }).limit(1);
      return results.length > 0 ? results[0] : undefined;
    } catch (error) {
      console.error('Error getting email template:', error);
      return undefined;
    }
  }
  
  async getAllEmailTemplates(active?: boolean): Promise<EmailTemplate[]> {
    try {
      let query = this.db.select().from(emailTemplates);
      if (active !== undefined) {
        query = query.where({ isActive: active });
      }
      const results = await query.orderBy(emailTemplates.name);
      return results;
    } catch (error) {
      console.error('Error getting all email templates:', error);
      return [];
    }
  }
  
  async updateEmailTemplate(id: number, updates: Partial<InsertEmailTemplate>): Promise<EmailTemplate | undefined> {
    try {
      const updatedValues = {
        ...updates,
        updatedAt: new Date()
      };
      const results = await this.db.update(emailTemplates).set(updatedValues).where({ id }).returning();
      return results.length > 0 ? results[0] : undefined;
    } catch (error) {
      console.error('Error updating email template:', error);
      return undefined;
    }
  }
  
  async deleteEmailTemplate(id: number): Promise<boolean> {
    try {
      await this.db.delete(emailTemplates).where({ id });
      return true;
    } catch (error) {
      console.error('Error deleting email template:', error);
      return false;
    }
  }
  
  // Customer communication methods
  async createCustomerCommunication(communication: InsertCustomerCommunication): Promise<CustomerCommunication> {
    try {
      // Ensure all required fields have values
      const communicationData = {
        ...communication,
        customerId: communication.customerId ?? null,
        subject: communication.subject ?? null,
        content: communication.content ?? null,
        sentById: communication.sentById ?? null,
        metadata: communication.metadata ?? {}
      };
      
      const results = await this.db.insert(customerCommunications).values(communicationData).returning();
      return results[0];
    } catch (error) {
      console.error('Error creating customer communication:', error);
      throw error;
    }
  }
  
  async getCustomerCommunication(id: number): Promise<CustomerCommunication | undefined> {
    try {
      const results = await this.db.select().from(customerCommunications).where({ id }).limit(1);
      return results.length > 0 ? results[0] : undefined;
    } catch (error) {
      console.error('Error getting customer communication:', error);
      return undefined;
    }
  }
  
  async getCustomerCommunicationsByCustomer(customerId: number, customerType: string): Promise<CustomerCommunication[]> {
    try {
      const results = await this.db.select()
        .from(customerCommunications)
        .where({ customerId, customerType })
        .orderBy(desc(customerCommunications.createdAt));
      return results;
    } catch (error) {
      console.error('Error getting customer communications:', error);
      return [];
    }
  }
  
  async getAllCustomerCommunications(filters?: {type?: string, dateFrom?: Date, dateTo?: Date}, pagination?: PaginationOptions): Promise<{communications: CustomerCommunication[], total: number}> {
    try {
      // First, get the total count
      let countQuery = `SELECT COUNT(*) FROM customer_communications WHERE 1=1`;
      let queryParams: any[] = [];
      let paramCounter = 1;
      
      if (filters) {
        if (filters.type) {
          countQuery += ` AND type = $${paramCounter}`;
          queryParams.push(filters.type);
          paramCounter++;
        }
        
        // Filter by date range
        if (filters.dateFrom) {
          countQuery += ` AND created_at >= $${paramCounter}`;
          queryParams.push(new Date(filters.dateFrom));
          paramCounter++;
        }
        
        if (filters.dateTo) {
          countQuery += ` AND created_at <= $${paramCounter}`;
          queryParams.push(new Date(filters.dateTo));
          paramCounter++;
        }
      }
      
      const countResult = await this.sql.query(countQuery, queryParams);
      const total = parseInt(countResult.rows[0].count);
      
      // Now get the filtered, paginated communications
      let query = `
        SELECT * FROM customer_communications 
        WHERE 1=1
      `;
      
      // Reset params for the main query
      queryParams = [];
      paramCounter = 1;
      
      if (filters) {
        if (filters.type) {
          query += ` AND type = $${paramCounter}`;
          queryParams.push(filters.type);
          paramCounter++;
        }
        
        // Filter by date range
        if (filters.dateFrom) {
          query += ` AND created_at >= $${paramCounter}`;
          queryParams.push(new Date(filters.dateFrom));
          paramCounter++;
        }
        
        if (filters.dateTo) {
          query += ` AND created_at <= $${paramCounter}`;
          queryParams.push(new Date(filters.dateTo));
          paramCounter++;
        }
      }
      
      query += ` ORDER BY created_at DESC`;
      
      if (pagination) {
        query += ` LIMIT $${paramCounter} OFFSET $${paramCounter + 1}`;
        queryParams.push(pagination.limit, (pagination.page - 1) * pagination.limit);
      }
      
      const communicationsResult = await this.sql.query(query, queryParams);
      return { communications: communicationsResult.rows, total };
    } catch (error) {
      console.error('Error getting all customer communications:', error);
      return { communications: [], total: 0 };
    }
  }
  
  // Task management methods
  async createCustomerTask(task: InsertCustomerTask): Promise<CustomerTask> {
    try {
      // Ensure all required fields have values
      const taskData = {
        ...task,
        status: task.status ?? "new",
        priority: task.priority ?? "medium",
        description: task.description ?? null,
        assignedToId: task.assignedToId ?? null,
        createdById: task.createdById ?? null,
        dueDate: task.dueDate ?? null,
        notes: task.notes ?? null
      };
      
      const results = await this.db.insert(customerTasks).values(taskData).returning();
      return results[0];
    } catch (error) {
      console.error('Error creating customer task:', error);
      throw error;
    }
  }
  
  async getCustomerTask(id: number): Promise<CustomerTask | undefined> {
    try {
      const results = await this.db.select().from(customerTasks).where({ id }).limit(1);
      return results.length > 0 ? results[0] : undefined;
    } catch (error) {
      console.error('Error getting customer task:', error);
      return undefined;
    }
  }
  
  async getCustomerTasksByAssignee(userId: number, filters?: TaskFilters): Promise<CustomerTask[]> {
    try {
      let query = `
        SELECT * FROM customer_tasks 
        WHERE assigned_to_id = $1
      `;
      let queryParams: any[] = [userId];
      let paramCounter = 2;
      
      if (filters) {
        if (filters.status) {
          query += ` AND status = $${paramCounter}`;
          queryParams.push(filters.status);
          paramCounter++;
        }
        
        if (filters.priority) {
          query += ` AND priority = $${paramCounter}`;
          queryParams.push(filters.priority);
          paramCounter++;
        }
        
        if (filters.dateFrom) {
          query += ` AND created_at >= $${paramCounter}`;
          queryParams.push(new Date(filters.dateFrom));
          paramCounter++;
        }
        
        if (filters.dateTo) {
          query += ` AND created_at <= $${paramCounter}`;
          queryParams.push(new Date(filters.dateTo));
          paramCounter++;
        }
        
        if (filters.search) {
          query += ` AND (
            title ILIKE $${paramCounter} OR 
            description ILIKE $${paramCounter}
          )`;
          queryParams.push(`%${filters.search}%`);
          paramCounter++;
        }
      }
      
      // Order by priority, due date, and created date
      query += `
        ORDER BY 
          CASE 
            WHEN priority = 'urgent' THEN 1
            WHEN priority = 'high' THEN 2
            WHEN priority = 'medium' THEN 3
            WHEN priority = 'low' THEN 4
            ELSE 5
          END,
          CASE WHEN due_date IS NULL THEN 1 ELSE 0 END,
          due_date ASC NULLS LAST,
          created_at DESC
      `;
      
      const results = await this.sql.query(query, queryParams);
      return results.rows;
    } catch (error) {
      console.error('Error getting tasks by assignee:', error);
      return [];
    }
  }
  
  async getCustomerTasksByCustomer(customerId: number, customerType: string): Promise<CustomerTask[]> {
    try {
      const results = await this.db.select()
        .from(customerTasks)
        .where({ customerId, customerType })
        .orderBy(desc(customerTasks.createdAt));
      return results;
    } catch (error) {
      console.error('Error getting customer tasks:', error);
      return [];
    }
  }
  
  async getAllCustomerTasks(filters?: TaskFilters, pagination?: PaginationOptions): Promise<{tasks: CustomerTask[], total: number}> {
    try {
      // First, get the total count
      let countQuery = `SELECT COUNT(*) FROM customer_tasks WHERE 1=1`;
      let queryParams: any[] = [];
      let paramCounter = 1;
      
      if (filters) {
        if (filters.status) {
          countQuery += ` AND status = $${paramCounter}`;
          queryParams.push(filters.status);
          paramCounter++;
        }
        
        if (filters.priority) {
          countQuery += ` AND priority = $${paramCounter}`;
          queryParams.push(filters.priority);
          paramCounter++;
        }
        
        if (filters.assignedToId) {
          countQuery += ` AND assigned_to_id = $${paramCounter}`;
          queryParams.push(filters.assignedToId);
          paramCounter++;
        }
        
        if (filters.dateFrom) {
          countQuery += ` AND created_at >= $${paramCounter}`;
          queryParams.push(new Date(filters.dateFrom));
          paramCounter++;
        }
        
        if (filters.dateTo) {
          countQuery += ` AND created_at <= $${paramCounter}`;
          queryParams.push(new Date(filters.dateTo));
          paramCounter++;
        }
        
        if (filters.search) {
          countQuery += ` AND (
            title ILIKE $${paramCounter} OR 
            description ILIKE $${paramCounter}
          )`;
          queryParams.push(`%${filters.search}%`);
          paramCounter++;
        }
      }
      
      const countResult = await this.sql.query(countQuery, queryParams);
      const total = parseInt(countResult.rows[0].count);
      
      // Now get the filtered, paginated tasks
      let query = `
        SELECT * FROM customer_tasks 
        WHERE 1=1
      `;
      
      // Reset params for the main query
      queryParams = [];
      paramCounter = 1;
      
      if (filters) {
        if (filters.status) {
          query += ` AND status = $${paramCounter}`;
          queryParams.push(filters.status);
          paramCounter++;
        }
        
        if (filters.priority) {
          query += ` AND priority = $${paramCounter}`;
          queryParams.push(filters.priority);
          paramCounter++;
        }
        
        if (filters.assignedToId) {
          query += ` AND assigned_to_id = $${paramCounter}`;
          queryParams.push(filters.assignedToId);
          paramCounter++;
        }
        
        if (filters.dateFrom) {
          query += ` AND created_at >= $${paramCounter}`;
          queryParams.push(new Date(filters.dateFrom));
          paramCounter++;
        }
        
        if (filters.dateTo) {
          query += ` AND created_at <= $${paramCounter}`;
          queryParams.push(new Date(filters.dateTo));
          paramCounter++;
        }
        
        if (filters.search) {
          query += ` AND (
            title ILIKE $${paramCounter} OR 
            description ILIKE $${paramCounter}
          )`;
          queryParams.push(`%${filters.search}%`);
          paramCounter++;
        }
      }
      
      // Order by status, priority, due date, and created date
      query += `
        ORDER BY 
          CASE 
            WHEN status = 'new' THEN 1
            WHEN status = 'in_progress' THEN 2
            WHEN status = 'contacted' THEN 3
            WHEN status = 'resolved' THEN 4
            WHEN status = 'canceled' THEN 5
            ELSE 6
          END,
          CASE 
            WHEN priority = 'urgent' THEN 1
            WHEN priority = 'high' THEN 2
            WHEN priority = 'medium' THEN 3
            WHEN priority = 'low' THEN 4
            ELSE 5
          END,
          CASE WHEN due_date IS NULL THEN 1 ELSE 0 END,
          due_date ASC NULLS LAST,
          created_at DESC
      `;
      
      if (pagination) {
        query += ` LIMIT $${paramCounter} OFFSET $${paramCounter + 1}`;
        queryParams.push(pagination.limit, (pagination.page - 1) * pagination.limit);
      }
      
      const tasksResult = await this.sql.query(query, queryParams);
      return { tasks: tasksResult.rows, total };
    } catch (error) {
      console.error('Error getting all customer tasks:', error);
      return { tasks: [], total: 0 };
    }
  }
  
  async updateCustomerTask(id: number, updates: Partial<InsertCustomerTask>): Promise<CustomerTask | undefined> {
    try {
      const updatedValues = {
        ...updates,
        updatedAt: new Date()
      };
      const results = await this.db.update(customerTasks).set(updatedValues).where({ id }).returning();
      return results.length > 0 ? results[0] : undefined;
    } catch (error) {
      console.error('Error updating customer task:', error);
      return undefined;
    }
  }
  
  async completeCustomerTask(id: number, completionNotes?: string): Promise<CustomerTask | undefined> {
    try {
      const task = await this.getCustomerTask(id);
      if (!task) return undefined;
      
      const updatedValues: any = {
        status: "resolved",
        completedAt: new Date(),
        updatedAt: new Date()
      };
      
      if (completionNotes) {
        updatedValues.notes = task.notes 
          ? `${task.notes}\n\nCompletion: ${completionNotes}` 
          : `Completion: ${completionNotes}`;
      }
      
      const results = await this.db.update(customerTasks).set(updatedValues).where({ id }).returning();
      return results.length > 0 ? results[0] : undefined;
    } catch (error) {
      console.error('Error completing task:', error);
      return undefined;
    }
  }
  
  // Task comments methods
  async addTaskComment(comment: InsertTaskComment): Promise<TaskComment> {
    try {
      const results = await this.db.insert(taskComments).values(comment).returning();
      return results[0];
    } catch (error) {
      console.error('Error adding task comment:', error);
      throw error;
    }
  }
  
  async getTaskComments(taskId: number): Promise<TaskComment[]> {
    try {
      const results = await this.db.select()
        .from(taskComments)
        .where({ taskId })
        .orderBy(taskComments.createdAt);
      return results;
    } catch (error) {
      console.error('Error getting task comments:', error);
      return [];
    }
  }
  
  // Customer status history methods
  async addCustomerStatusHistory(statusHistory: InsertCustomerStatusHistory): Promise<CustomerStatusHistory> {
    try {
      // Ensure all required fields have values
      const historyData = {
        ...statusHistory,
        notes: statusHistory.notes ?? null,
        changedById: statusHistory.changedById ?? null
      };
      
      const results = await this.db.insert(customerStatusHistory).values(historyData).returning();
      return results[0];
    } catch (error) {
      console.error('Error adding status history:', error);
      throw error;
    }
  }
  
  async getCustomerStatusHistory(customerId: number, customerType: string): Promise<CustomerStatusHistory[]> {
    try {
      const results = await this.db.select()
        .from(customerStatusHistory)
        .where({ customerId, customerType })
        .orderBy(desc(customerStatusHistory.createdAt));
      return results;
    } catch (error) {
      console.error('Error getting status history:', error);
      return [];
    }
  }
  
  // Bulk operations
  async bulkUpdateTaskStatus(taskIds: number[], status: StatusType): Promise<number> {
    try {
      const updateValues: any = {
        status,
        updatedAt: new Date()
      };
      
      // If status is "resolved", set completedAt
      if (status === "resolved") {
        updateValues.completedAt = new Date();
      }
      
      const result = await this.db.update(customerTasks)
        .set(updateValues)
        .where(inArray(customerTasks.id, taskIds));
      
      // Return the count of updated rows
      return result.length || 0;
    } catch (error) {
      console.error('Error bulk updating task status:', error);
      return 0;
    }
  }
  
  async bulkAssignTasks(taskIds: number[], assignedToId: number): Promise<number> {
    try {
      const result = await this.db.update(customerTasks)
        .set({ 
          assignedToId,
          updatedAt: new Date()
        })
        .where(inArray(customerTasks.id, taskIds));
      
      // Return the count of updated rows
      return result.length || 0;
    } catch (error) {
      console.error('Error bulk assigning tasks:', error);
      return 0;
    }
  }
  
  // Integration configuration methods
  async getIntegrationConfig(type: string): Promise<IntegrationConfig | undefined> {
    try {
      const results = await this.db.select().from(integrationConfigs)
        .where(eq(integrationConfigs.type, type))
        .where(eq(integrationConfigs.isActive, true))
        .limit(1);
      
      return results.length > 0 ? results[0] : undefined;
    } catch (error) {
      console.error('Error getting integration config:', error);
      return undefined;
    }
  }
  
  async getAllIntegrationConfigs(): Promise<IntegrationConfig[]> {
    try {
      const configs = await this.db.select().from(integrationConfigs);
      return configs;
    } catch (error) {
      console.error('Error getting all integration configs:', error);
      return [];
    }
  }
  
  async createIntegrationConfig(config: InsertIntegrationConfig): Promise<IntegrationConfig> {
    try {
      const now = new Date();
      
      // Prepare the data for insertion
      const integrationConfigData = {
        ...config,
        serviceSignupWebhook: config.serviceSignupWebhook || null,
        esimCallbackWebhook: config.esimCallbackWebhook || null,
        iptvSignupWebhook: config.iptvSignupWebhook || null,
        apiKey: config.apiKey || null,
        isActive: config.isActive ?? true,
        lastModifiedById: config.lastModifiedById || null,
        createdAt: now,
        updatedAt: now
      };
      
      // Insert the integration config
      const result = await this.db.insert(integrationConfigs).values(integrationConfigData).returning();
      
      if (!result || result.length === 0) {
        throw new Error('Failed to create integration config');
      }
      
      return result[0] as IntegrationConfig;
    } catch (error) {
      console.error('Error creating integration config:', error);
      throw error;
    }
  }
  
  async updateIntegrationConfig(id: number, updates: Partial<InsertIntegrationConfig>): Promise<IntegrationConfig | undefined> {
    try {
      // Add updatedAt to the update data
      const updateData = {
        ...updates,
        updatedAt: new Date()
      };
      
      // Update the integration config
      const result = await this.db.update(integrationConfigs)
        .set(updateData)
        .where(eq(integrationConfigs.id, id))
        .returning();
      
      if (!result || result.length === 0) {
        return undefined;
      }
      
      return result[0] as IntegrationConfig;
    } catch (error) {
      console.error('Error updating integration config:', error);
      return undefined;
    }
  }
}

// Use PostgreSQL storage if DATABASE_URL is defined, otherwise fallback to in-memory storage
export const storage = process.env.DATABASE_URL ? new PostgresStorage() : new MemStorage();
