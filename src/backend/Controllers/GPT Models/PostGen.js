import openai from "@/backend/Config/openAIConfig"

export const generatePost = async (req) =>{
    try {
        const { text} = await req.json();

      const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
        {
            role: "system",
            content: `
You are an expert social media copywriter.  
Your task is to write a short, catchy, and engaging social media post based on the following user input: "${text}".  

Focus on making the post attention-grabbing and concise, ideally 1–3 sentences.  
Ensure it is fully human-like, natural, and professional, while tailored to the platform specified by the user.  

Avoid generic phrasing, robotic tone, or repetitive wording. Use active voice and make it emotionally engaging.  
The final output should be ready-to-post, with no spelling or grammatical errors, and optimized to attract maximum engagement on the platform.`
        },
        {
            role: "user",
            content: `Generate a social media post for the platform and topic specified in the input: "${text}".  
Make it short, catchy, and engaging, suitable for social media audiences, with natural language and attention-grabbing style.`
        }
    ]
});


        const post = response.choices[0].message.content;
        return new Response(JSON.stringify({ post}),
        {
            status:200
        }
        );
    } catch (error) {
        console.error("❌ AI Post Generation Error:", error);
    return new Response(JSON.stringify({ error: "Failed to generate post" }), { status: 500 });
    }
}