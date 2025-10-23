import { 
  users, 
  products,
  caseStudies,
  blogPosts,
  contactSubmissions,
  type User, 
  type InsertUser,
  type Product,
  type InsertProduct,
  type CaseStudy,
  type InsertCaseStudy,
  type BlogPost,
  type InsertBlogPost,
  type ContactSubmission,
  type InsertContactSubmission
} from "@shared/schema";

export interface IStorage {
  // Users
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Products
  getProducts(): Promise<Product[]>;
  getProduct(id: number): Promise<Product | undefined>;
  getProductBySlug(slug: string): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;
  
  // Case Studies
  getCaseStudies(): Promise<CaseStudy[]>;
  getCaseStudy(id: number): Promise<CaseStudy | undefined>;
  getCaseStudyBySlug(slug: string): Promise<CaseStudy | undefined>;
  createCaseStudy(caseStudy: InsertCaseStudy): Promise<CaseStudy>;
  
  // Blog Posts
  getBlogPosts(): Promise<BlogPost[]>;
  getPublishedBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(id: number): Promise<BlogPost | undefined>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  createBlogPost(blogPost: InsertBlogPost): Promise<BlogPost>;
  
  // Contact Submissions
  getContactSubmissions(): Promise<ContactSubmission[]>;
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private products: Map<number, Product>;
  private caseStudies: Map<number, CaseStudy>;
  private blogPosts: Map<number, BlogPost>;
  private contactSubmissions: Map<number, ContactSubmission>;
  private currentId: number;

  constructor() {
    this.users = new Map();
    this.products = new Map();
    this.caseStudies = new Map();
    this.blogPosts = new Map();
    this.contactSubmissions = new Map();
    this.currentId = 1;
    
    // Initialize with sample data
    this.initializeData();
  }
  
  private initializeData() {
    // Sample products
    const product1: Product = {
      id: this.currentId++,
      name: "Environmental Monitoring System",
      slug: "environmental-monitoring-system",
      description: "Real-time environmental parameter monitoring with automated alerts, trend analysis, and comprehensive audit trails for cleanroom and controlled environments.",
      features: [
        "Temperature Monitoring",
        "Humidity Control", 
        "Air Pressure",
        "Trend Analysis",
        "Real-time Alerts",
        "Automated Reports",
        "21 CFR Part 11 Compliance"
      ],
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      datasheetUrl: "/downloads/environmental-monitoring-datasheet.pdf",
      complianceLevel: "21 CFR Part 11",
      category: "monitoring",
      isActive: true,
      createdAt: new Date()
    };
    
    const product2: Product = {
      id: this.currentId++,
      name: "Microbial Assay Zone Reader",
      slug: "microbial-assay-zone-reader",
      description: "Automated zone reading and analysis for antimicrobial susceptibility testing with digital documentation and regulatory-compliant reporting.",
      features: [
        "Automated Reading",
        "MIC Calculation",
        "Digital Reports",
        "Data Integrity",
        "Zone Measurement",
        "Statistical Analysis",
        "21 CFR Part 11 Compliance"
      ],
      imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      datasheetUrl: "/downloads/microbial-assay-datasheet.pdf",
      complianceLevel: "21 CFR Part 11",
      category: "analysis",
      isActive: true,
      createdAt: new Date()
    };
    
    this.products.set(product1.id, product1);
    this.products.set(product2.id, product2);
    
    // Sample case studies
    const caseStudy1: CaseStudy = {
      id: this.currentId++,
      title: "Global Pharma Corp",
      slug: "global-pharma-corp",
      industry: "Pharmaceutical Manufacturing",
      description: "Reduced audit preparation time by 75% while maintaining 100% compliance across 12 manufacturing sites.",
      content: "Detailed case study content about Global Pharma Corp implementation...",
      imageUrl: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      metrics: {
        timeSaved: "75%",
        sites: "12",
        complianceRate: "100%"
      },
      isActive: true,
      createdAt: new Date()
    };
    
    const caseStudy2: CaseStudy = {
      id: this.currentId++,
      title: "BioInnovate Labs",
      slug: "bioinnovate-labs",
      industry: "Biotech Research",
      description: "Streamlined clinical trial data management with automated compliance monitoring and real-time reporting.",
      content: "Detailed case study content about BioInnovate Labs implementation...",
      imageUrl: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      metrics: {
        reportSpeed: "90%",
        monitoring: "24/7",
        efficiency: "85%"
      },
      isActive: true,
      createdAt: new Date()
    };
    
    this.caseStudies.set(caseStudy1.id, caseStudy1);
    this.caseStudies.set(caseStudy2.id, caseStudy2);
    
    // Sample blog posts
    const blogPost1: BlogPost = {
      id: this.currentId++,
      title: "Understanding FDA 21 CFR Part 11 Compliance",
      slug: "understanding-fda-21-cfr-part-11-compliance",
      excerpt: "A comprehensive guide to understanding and implementing FDA 21 CFR Part 11 compliance in your organization.",
      content: "Detailed blog post content about FDA compliance...",
      imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      category: "compliance",
      tags: ["FDA", "Compliance", "Regulation"],
      isPublished: true,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    this.blogPosts.set(blogPost1.id, blogPost1);
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
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Product methods
  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values()).filter(p => p.isActive);
  }
  
  async getProduct(id: number): Promise<Product | undefined> {
    const product = this.products.get(id);
    return product?.isActive ? product : undefined;
  }
  
  async getProductBySlug(slug: string): Promise<Product | undefined> {
    return Array.from(this.products.values()).find(
      p => p.slug === slug && p.isActive
    );
  }
  
  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = this.currentId++;
    const product: Product = { 
      ...insertProduct, 
      id, 
      createdAt: new Date() 
    };
    this.products.set(id, product);
    return product;
  }
  
  // Case Study methods
  async getCaseStudies(): Promise<CaseStudy[]> {
    return Array.from(this.caseStudies.values()).filter(cs => cs.isActive);
  }
  
  async getCaseStudy(id: number): Promise<CaseStudy | undefined> {
    const caseStudy = this.caseStudies.get(id);
    return caseStudy?.isActive ? caseStudy : undefined;
  }
  
  async getCaseStudyBySlug(slug: string): Promise<CaseStudy | undefined> {
    return Array.from(this.caseStudies.values()).find(
      cs => cs.slug === slug && cs.isActive
    );
  }
  
  async createCaseStudy(insertCaseStudy: InsertCaseStudy): Promise<CaseStudy> {
    const id = this.currentId++;
    const caseStudy: CaseStudy = { 
      ...insertCaseStudy, 
      id, 
      createdAt: new Date() 
    };
    this.caseStudies.set(id, caseStudy);
    return caseStudy;
  }
  
  // Blog Post methods
  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values());
  }
  
  async getPublishedBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values()).filter(bp => bp.isPublished);
  }
  
  async getBlogPost(id: number): Promise<BlogPost | undefined> {
    return this.blogPosts.get(id);
  }
  
  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    return Array.from(this.blogPosts.values()).find(
      bp => bp.slug === slug && bp.isPublished
    );
  }
  
  async createBlogPost(insertBlogPost: InsertBlogPost): Promise<BlogPost> {
    const id = this.currentId++;
    const blogPost: BlogPost = { 
      ...insertBlogPost, 
      id, 
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.blogPosts.set(id, blogPost);
    return blogPost;
  }
  
  // Contact Submission methods
  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values());
  }
  
  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = this.currentId++;
    const submission: ContactSubmission = { 
      ...insertSubmission, 
      id,
      isProcessed: false,
      createdAt: new Date() 
    };
    this.contactSubmissions.set(id, submission);
    return submission;
  }
}

export const storage = new MemStorage();
