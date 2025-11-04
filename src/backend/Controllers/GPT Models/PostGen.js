import openai from "@/backend/Config/openAIConfig";
import { model } from "mongoose";

export const generatePost = async(req) =>{
    try {
        const { topic } = await req.json();

        //Prompt Templete

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
    {
      role: "system",
      content: `
You are an expert social media copywriter and brand strategist.
Your job is to craft highly engaging, platform-optimized social media posts that attract attention and encourage interaction.

Each post should sound natural, authentic, and tailored to the specific platform (Twitter, Instagram, LinkedIn, or Facebook).  
The tone, style, and length must automatically adjust based on the platform.

Rules:
- Twitter: Short, catchy, with emojis and hashtags (max 280 characters)
- Instagram: A bit longer, visually expressive, story-style captions with emojis and relevant hashtags
- LinkedIn: Professional, value-driven, engaging tone, clear takeaway or insight
- Facebook: Conversational, friendly, and slightly longer — use emojis and a relatable vibe

Focus on emotional connection, readability, and clarity. 
Avoid robotic or overly formal phrasing.  
Ensure **zero grammar or spelling mistakes** and always make it sound like a human wrote it.
`
    },
    {
      role: "user",
      content: `
Generate a social media post about: "${topic}"
Platform: If mention with topic
Tone: professional and bold

Make sure the post:
1. Fits perfectly for the platform mentioned.
2. Includes 1–3 relevant hashtags.
3. Uses natural emojis (where appropriate).
4. Is 100% human-like, creative, and emotionally appealing.
5. Avoids repetition or robotic text.

Return only the final post text — no explanations.
`
    }
  ]
});

        const post = response.choices[0].message.content;
        return new Response(JSON.stringify({ post})),
        {
            status:200
        }

    } catch (error) {
        console.log("❌ AI Generation Error:", error)
        return new Response(
            JSON.stringify({ error: "Failed to generate post" }),
            { status: 500 }
        );
    }
}