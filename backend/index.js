import express from "express";
import dotenv from "dotenv";
import connectDB from "./models/db.js";
import cors from "cors";
import Authrouter from "./routes/AuthRouter.js";
import ProductRouter from "./routes/ProductRouter.js";

dotenv.config();

const app = express();

connectDB();
const PORT = process.env.PORT || 8000;

// CORS Configuration for deployment
const allowedOrigins = [
  "http://localhost:3000", // Local development
  "http://localhost:3001", // Alternative local port
  process.env.FRONTEND_URL, // Production frontend URL (from env variable)
  // Add your Vercel deployment URLs here (you'll get these after deploying)
  // "https://your-app.vercel.app",
  // "https://your-app-git-main-username.vercel.app",
  // "https://your-app-username.vercel.app"
].filter(Boolean); // Remove undefined values

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps, Postman, curl)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      console.log('Blocked origin:', origin);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // Allow cookies/auth headers
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from the backend!");
});

app.use("/auth", Authrouter);
app.use("/products", ProductRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});