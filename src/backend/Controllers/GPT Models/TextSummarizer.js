import openai from "@/backend/Config/openAIConfig";

export const generateSummary = async (req) =>{
  try {
    const { text } = await req.json();

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      message: [
        {
            role: "system",
            content: `You are an expert content analyst and professional communicator.
            
Your task is to summarize any user input by extracting and organizing the key main points into a clear, structured format.

REQUIREMENTS:
- Identify and extract the core ideas, key points, and essential information
- Organize points logically and hierarchically (main points → supporting details)
- Use professional yet accessible language that's easy to understand
- Maintain the original meaning and context while improving clarity
- Keep summaries concise but comprehensive - include all important information
- Use bullet points or numbered lists for better readability when appropriate
- Ensure zero spelling or grammatical errors
- Write in active voice with smooth, natural flow

TONE & STYLE:
- Professional but not overly technical
- Clear and straightforward
- Accessible to various reading levels
- Polished and credible
- Human-like and engaging

OUTPUT FORMAT:
Provide a well-structured summary that includes:
1. Overall context/main topic
2. Key points extracted
3. Any specific requirements or action items mentioned
4. Clear organization that's easy to scan and understand

Focus on delivering maximum clarity and value while keeping the summary professional and easy to digest.`
        },
        {
            role: "user",
            content: `Please analyze and summarize the following input by extracting the main points and presenting them in a clear, professional, and easy-to-understand format:

"${text}"

Please focus on:
- Identifying the core message and key objectives
- Extracting all important details and requirements  
- Organizing information logically
- Using clear, professional language that's accessible to everyone
- Maintaining perfect grammar and readability

Provide a comprehensive yet concise summary that captures the essence of the input in an organized, professional manner.`
        }
    ]
    })

    const textsummary = response.choices[0].message.content;

    return new Response(JSON.stringify({textsummary}),
  {status:200})


  } catch (error) {
    console.error("❌ AI Generation Error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to generate article" }),
      { status: 500 }
    );
  }
}