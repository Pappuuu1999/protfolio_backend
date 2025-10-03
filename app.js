import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import workData from "./mywork_data.js";
import servicesData from "./workData.js";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// CORS setup - allow all origins for development
app.use(
  cors({
    origin: true, // Allow all origins
    credentials: true,
  })
);

// Serve static images (maps to Backend/asset)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/assets", express.static(path.join(__dirname, "asset")));
// Expose `/api/assets` as well for compatibility with deployed URLs
app.use("/api/assets", express.static(path.join(__dirname, "asset")));
// Keep only local /assets path for simplicity in local dev

// API routes
app.get("/api/projects", (req, res) => {
  res.json(workData);
});

app.get("/api/services", (req, res) => {
  res.json(servicesData);
});

// Single work detail by id
app.get("/api/work/:id", (req, res) => {
  const id = Number(req.params.id);
  const item = workData.find(w => w.id === id);
  if (!item) return res.status(404).json({ message: "Work not found" });
  res.json(item);
});

// Root route
app.get("/", (req, res) => {
  res.send("API running! Use /api/projects or /api/services");
});

export default app;


