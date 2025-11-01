import { registerUser,loginUser } from "@/backend/Controllers/authController";


export async function POST(req) {
  const { type } = Object.fromEntries(new URL(req.url).searchParams);

  if (type === "register") {
    return await registerUser(req);
  }

  if (type === "login") {
    return await loginUser(req);
  }

  return new Response(JSON.stringify({ message: "Invalid request type" }), {
    status: 400,
  });
}