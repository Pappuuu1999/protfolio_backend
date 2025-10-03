import express from "express";
import cors from "cors";

const app = express();

// ✅ Allow frontend domain
app.use(cors({
  origin: "https://portfolio-4vty.vercel.app", // your frontend domain
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// Example route
app.get("/api/projects", (req, res) => {
  res.json([{ id: 1, name: "My Project" }]);
});

app.listen(5000, () => console.log("Server running..."));
