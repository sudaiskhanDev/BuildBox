import { generateArticle } from "../Controllers/GPT Models/ArticleGen.js";
import { generatePost  } from "../Controllers/GPT Models/PostGen.js"
import textSummarizer  from "../Controllers/GPT Models/TextSummarizer.js"

export async function handleAiRoutes(req) {
  try {
    const url = new URL(req.url);
    const type = url.searchParams.get("type");

    if (type === "article") {
      return await generateArticle(req);
    }

   if(type === "post") {
  return await generatePost(req);

  
}
if(type === "textsummarizer"){
    return await textSummarizer(req);
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

 
