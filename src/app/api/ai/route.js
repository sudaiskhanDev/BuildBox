import { handleAiRoutes } from "@/backend/Routes/gptModelRoutes.js";

export async function POST(req) {
  return await handleAiRoutes(req);
}
