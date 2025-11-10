import openai from "@/backend/Config/openAIConfig"

export const generatePost = async (req) =>{
    try {
        const { text} = await req.json();

        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
        {
          role: "system",
          content: `You are an expert social media copywriter. 
Generate a short, catchy, and engaging post based on the following user input:
"${text}"

The user has specified the platform in the input text. Make the post suitable for that platform. Keep it concise, attention-grabbing, and fully natural.`
        }
      ]
        })


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