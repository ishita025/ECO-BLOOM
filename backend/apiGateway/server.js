import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import { createProxyMiddleware } from "http-proxy-middleware";
import path from "path";
import { corsConfig } from 'models-pms';

dotenv.config();

const app = express();

// Middleware
app.use(cors(corsConfig));
app.use(morgan("dev"));

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

// API Gateway Routes - Forward requests to Microservices
app.use("/api/auth", createProxyMiddleware({ target: "http://localhost:5002", changeOrigin: true }));
app.use("/user", createProxyMiddleware({ target: "http://localhost:5003", changeOrigin: true }));
app.use("/admin", createProxyMiddleware({ target: "http://localhost:5004", changeOrigin: true }));
app.use("/member", createProxyMiddleware({ target: "http://localhost:5005", changeOrigin: true }));
app.use("/mail", createProxyMiddleware({ target: "http://localhost:5007", changeOrigin: true }));

// Route to serve an image
app.get("/image/:name", (req, res) => {
  const filePath = path.join(process.cwd(), "../services/userService/uploads", req.params.name);
  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(404).json({ success: false, message: "Image not found" });
    }
  });
});

// Default Route
app.get("/", (req, res) => {
  res.json({ message: "API Gateway is Running" });
});

// Start API Gateway
const PORT = process.env.API_GATEWAY_PORT || 5000;
app.listen(PORT, () => console.log(`API Gateway running on port ${PORT}`));