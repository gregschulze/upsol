import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { leadFormSchema, newsletterSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Create a lead
  app.post("/api/leads", async (req, res) => {
    try {
      const validatedData = leadFormSchema.parse(req.body);
      const lead = await storage.createLead(validatedData);
      res.status(201).json({ success: true, lead });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({
          success: false, 
          message: validationError.message
        });
      } else {
        console.error("Error creating lead:", error);
        res.status(500).json({
          success: false,
          message: "Failed to create lead. Please try again later."
        });
      }
    }
  });

  // Subscribe to newsletter
  app.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = newsletterSchema.parse(req.body);
      const subscription = await storage.createNewsletterSubscription(validatedData);
      res.status(201).json({ success: true, subscription });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({
          success: false, 
          message: validationError.message
        });
      } else {
        console.error("Error subscribing to newsletter:", error);
        res.status(500).json({
          success: false,
          message: "Failed to subscribe to newsletter. Please try again later."
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
