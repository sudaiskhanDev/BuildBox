import { handleAiRoutes } from "@/backend/Routes/gptModelRoutes.js";

export async function POST(req) {
  return await handleAiRoutes(req);
}

// // Optional: handle GET to avoid 405
// export async function GET(req) {
//   return new Response(JSON.stringify({ message: "Use POST method" }), { status: 405 });
// }
