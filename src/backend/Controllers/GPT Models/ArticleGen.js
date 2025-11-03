import openai from "@/backend/Config/openAIConfig";

export const generateArticle = async (req) =>{
    try {
        
        const { text } = await req.json();

        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages:[
                {
                    role: "system",
                    content:"You are an expert blog strategist and SEO content writer. Your task is to write a compelling blog post introduction for the topic:\${text}\.The introduction should be optimized for SEO, include relevant keywords, and hook the reader with a clear value proposition. Use a professional yet engaging tone suitable for marketing professionals and business owners."
                },
                {
                    role: "user",
                    content:"Generate a 1000-word SEO-friendly article about: \"${text}\". You are an expert SEO content writer. The article should be informative, engaging, and naturally include relevant keywords related to the topic. Avoid keyword stuffing and ensure smooth readability. Use active voice, short paragraphs, and a professional tone suitable for blogs or product pages."
                }
            ]
        })

        const article = response.choices[0].message.content;
        return new Response(JSON.stringify({ article}),
        {
            status:200
        }
        )
    } catch (error) {
          console.error("❌ AI Generation Error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to generate article" }),
      { status: 500 }
    );
    }
}