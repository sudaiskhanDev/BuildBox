import openai from "@/backend/Config/openAIConfig";

export const generateArticle = async (req) =>{
    try {
        
        const { text } = await req.json();

        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
          messages: [
  {
    role: "system",
    content: `
You are an expert blog strategist and professional SEO content writer. 
You write polished, human-like, SEO-optimized content that is engaging, accurate, and error-free.
Always ensure proper spelling, grammar, and smooth readability.
Use active voice, natural tone, and professional language suitable for business and marketing blogs.
Avoid keyword stuffing and robotic phrasing.
`
  },
  {
    role: "user",
    content: `
Write only a compelling blog post introduction about: "${text}".  

The introduction should be limited to 1–3 short paragraphs (around 100–150 words).  
It must be fully optimized for SEO, include relevant and naturally placed keywords, and immediately hook the reader with a clear value proposition.  

Focus on crafting an engaging opening that captures attention and encourages readers to continue reading the full article.  
Do not write the full blog post — only the introduction is required.  

Use a professional yet conversational tone that appeals to marketing professionals, entrepreneurs, and business owners.  
Keep the language simple, polished, and human-like — easy to understand but still professional and credible.  

Ensure zero spelling or grammatical errors. The text must be proofread before finalizing to guarantee correct spelling, punctuation, and sentence structure.  
`
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