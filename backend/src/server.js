import "dotenv/config";
import cors from "cors";
import express from "express";
import contactRoutes from "./routes/contact.js";

const app = express();
const PORT = process.env.PORT || 8080;
const frontendOrigin = process.env.FRONTEND_ORIGIN || "http://localhost:3000";

app.use(
  cors({
    origin: frontendOrigin,
    methods: ["GET", "POST"],
    credentials: false
  })
);
app.use(express.json({ limit: "1mb" }));

app.get("/health", (_req, res) => {
  res.json({ status: "ok", service: "vishwakamal-technicals-api" });
});

app.use("/api", contactRoutes);

app.listen(PORT, () => {
  console.log(`API listening on port ${PORT}`);
});
