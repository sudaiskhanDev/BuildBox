import { generateArticle } from "../Controllers/GPT Models/ArticleGen.js";


export async function handleAiRoutes(req) {
  try {
    const url = new URL(req.url);
    const type = url.searchParams.get("type");

    if (type === "article") {
      return await generateArticle(req);
    }

    // ❌ Invalid Type
    return new Response(JSON.stringify({ message: "Invalid AI type" }), {
      status: 404,
    });
  } catch (error) {
    console.error("Route Error:", error);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
    });
  }
}


