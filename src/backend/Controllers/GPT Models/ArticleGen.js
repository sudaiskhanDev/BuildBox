import openai from "@/backend/Config/openAIConfig";

export const generateArticle = async (req) =>{
    try {
        
        const { text } = await req.json();

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages:[
                {
                    role: "system",
                    content:"You are an expert blog strategist and SEO content writer."
                },
                {
                    role: "user",
                    content:  `Generate a 100-word SEO-friendly article about: "${text}"`,
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