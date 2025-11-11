// src/backend/middleware/authMiddleware.js
import jwt from "jsonwebtoken";
import User from "@/backend/model/UserModel.js";

// 🔐 App Router Compatible Auth Middleware
export const auth = async (req) => {
  try {
    // 1️⃣ Authorization header check
    const authHeader = req.headers.get("authorization"); // Next.js fetch-style
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new Error("Unauthorized: No token provided");
    }

    // 2️⃣ Token extract
    const token = authHeader.split(" ")[1];

    // 3️⃣ Token verify
    const decoded = jwt.verify(token, process.env.JWT);

    // 4️⃣ User fetch (without password)
    const user = await User.findById(decoded.id).select("-password");
    if (!user) throw new Error("Unauthorized: User not found");

    // ✅ Return user so route handler can use it
    return user;
  } catch (error) {
    console.error(error);
    throw new Error("Unauthorized: Invalid or expired token");
  }
};
