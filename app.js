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

// CORS setup (env configurable)
const allowedOrigins = (process.env.CORS_ORIGIN || "http://localhost:5173").split(",").map(s => s.trim());
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

// Serve static images from /assets (maps to Backend/asset)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/assets", express.static(path.join(__dirname, "asset")));

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


