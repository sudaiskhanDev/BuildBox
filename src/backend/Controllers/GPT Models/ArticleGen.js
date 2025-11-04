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
Your task is to write a highly compelling and well-structured blog post introduction about: "${text}".  

The introduction must be optimized for SEO and naturally include relevant keywords related to the topic.  
It should immediately grab the reader’s attention with a strong hook and clearly communicate the value or benefit of reading the article.  
Focus on crafting a powerful opening paragraph that builds curiosity, establishes authority, and sets the right tone for the rest of the content.  

Use a professional yet engaging tone that appeals to marketing professionals, entrepreneurs, and business owners.  
Ensure that the language remains simple, easy to understand, and polished — avoiding jargon or overly complex phrasing.  
Write in a natural, conversational flow that feels human and authentic while maintaining a sense of expertise and credibility.  

Keep the introduction concise, impactful, and aligned with SEO best practices.  
Use active voice, short sentences, and smooth transitions to ensure readability and engagement.  
Avoid keyword stuffing — instead, integrate keywords organically to maintain a natural rhythm and enhance search performance.  

The final output should read like a high-quality blog introduction written by a skilled human writer, designed to attract, engage, and convert readers while supporting strong SEO performance.
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