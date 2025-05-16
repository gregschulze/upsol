import { 
  users, type User, type InsertUser,
  leads, type Lead, type InsertLead,
  newsletters, type Newsletter, type InsertNewsletter
} from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createLead(lead: InsertLead): Promise<Lead>;
  createNewsletterSubscription(newsletter: InsertNewsletter): Promise<Newsletter>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private leads: Map<number, Lead>;
  private newsletters: Map<number, Newsletter>;
  
  currentUserId: number;
  currentLeadId: number;
  currentNewsletterId: number;

  constructor() {
    this.users = new Map();
    this.leads = new Map();
    this.newsletters = new Map();
    
    this.currentUserId = 1;
    this.currentLeadId = 1;
    this.currentNewsletterId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  async createLead(insertLead: InsertLead): Promise<Lead> {
    const id = this.currentLeadId++;
    const now = new Date();
    const lead: Lead = { 
      ...insertLead, 
      id, 
      createdAt: now,
      phone: insertLead.phone || null, 
      company: insertLead.company || null 
    };
    this.leads.set(id, lead);
    return lead;
  }
  
  async createNewsletterSubscription(insertNewsletter: InsertNewsletter): Promise<Newsletter> {
    // Check if email already exists
    const existingEmail = Array.from(this.newsletters.values()).find(
      (newsletter) => newsletter.email === insertNewsletter.email
    );
    
    if (existingEmail) {
      return existingEmail;
    }
    
    const id = this.currentNewsletterId++;
    const now = new Date();
    const newsletter: Newsletter = { ...insertNewsletter, id, createdAt: now };
    this.newsletters.set(id, newsletter);
    return newsletter;
  }
}

export const storage = new MemStorage();
