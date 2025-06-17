// scripts/addAdminCode.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Setup dotenv with ESM compatibility
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, "../.env.local") }); // Adjust if your env is named differently

import AdminCode from "../lib/models/AdminCode.js";
import { connectToDatabase } from "../lib/db.js";

async function run() {
  await connectToDatabase();
  const code = process.env.ADMIN_CODE;
  if (!code) {
    console.error("❌ ADMIN_CODE not found in .env.local");
    process.exit(1);
  }
  await AdminCode.create({ code });
  console.log("✅ Admin code added.");
  mongoose.connection.close();
}

run();
