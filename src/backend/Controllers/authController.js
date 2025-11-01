import jwt from "jsonwebtoken";
import User from "@/backend/model/UserModel.js";
import { connectDB } from "@/backend/Config/db.js";

// 🧱 Register Controller
export const registerUser = async (req) => {
  await connectDB();

  const { name, email, password } = await req.json();

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return new Response(JSON.stringify({ message: "User already exists" }), {
      status: 400,
    });
  }

  const user = await User.create({ name, email, password });

  return new Response(
    JSON.stringify({
      message: "User created successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    }),
    { status: 201 }
  );
};

// 🔐 Login Controller
export const loginUser = async (req) => {
  await connectDB();

  const { email, password } = await req.json();

  const user = await User.findOne({ email });
  if (!user) {
    return new Response(JSON.stringify({ message: "User not found" }), {
      status: 404,
    });
  }

  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    return new Response(JSON.stringify({ message: "Invalid credentials" }), {
      status: 401,
    });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT, {
    expiresIn: "30d",
  });

  return new Response(
    JSON.stringify({
      message: "User logged in successfully",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    }),
    { status: 200 }
  );
};
