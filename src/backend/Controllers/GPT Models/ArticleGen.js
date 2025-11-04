import openai from "@/backend/Config/openAIConfig";

export const generateArticle = async (req) =>{
    try {
        
        const { text } = await req.json();

        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages:[
                {
                    role: "system",
                    content:`You are an expert blog strategist and professional SEO content writer.  
Your task is to write only a compelling blog post introduction about: "${text}".  

The introduction should be limited to 1–3 short paragraphs (around 100–150 words).  
It must be fully optimized for SEO, include relevant and naturally placed keywords, and immediately hook the reader with a strong and clear value proposition.  

Focus on crafting an engaging opening that captures attention and encourages readers to continue reading the full article.  
Do not write the full blog post — only the introduction is required.  

Use a professional yet conversational tone that appeals to marketing professionals, entrepreneurs, and business owners.  
Keep the language simple, polished, and human-like — easy to understand but still professional and credible.  

Ensure **zero spelling or grammatical errors** in the final output.  
The introduction must be proofread carefully before finalizing to guarantee correct spelling, punctuation, and sentence structure.  

Write in active voice, keep paragraphs short, and maintain a smooth, natural flow.  
Avoid keyword stuffing, robotic phrasing, or repetitive wording.  

The final output should be a **clean, error-free, and SEO-optimized blog introduction** that instantly builds interest and clearly conveys the article’s main value or idea.
`
                },
                {
                    role: "user",
                    content:`Generate a 1000-word, SEO-friendly, and fully humanized article about: "${text}".  
You are an expert SEO content writer with a deep understanding of keyword research, search intent, and reader engagement.  
The article should be comprehensive, informative, and written in a way that feels completely natural and human-like.  
It must effectively balance SEO optimization with engaging storytelling to capture and retain the reader’s attention.

The content should include relevant keywords and phrases connected to the topic, but they must be used organically within the flow of the text.  
Avoid keyword stuffing at all costs — focus instead on natural placement, semantic relevance, and a smooth, conversational tone.  
Ensure that the writing provides real value, answers user intent, and maintains a consistent flow from start to finish.

Use active voice throughout the article to make the tone more direct, confident, and professional.  
Keep paragraphs short (2–4 sentences) to improve readability and make the text easily scannable for both users and search engines.  
Incorporate clear headings and subheadings (H2, H3) to organize the content logically and improve SEO structure.

Maintain a professional, polished tone that fits perfectly for blogs, business websites, or product pages.  
The article should read as if written by a human expert — natural, emotionally engaging, and free from robotic or repetitive phrasing.  
Use transition words for smooth flow, ensure grammatical accuracy, and avoid filler or unnecessary words.  
The goal is to produce a well-balanced article that is both search-engine optimized and enjoyable for real human readers.
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