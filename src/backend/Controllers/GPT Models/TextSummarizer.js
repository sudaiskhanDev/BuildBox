import { max, pipeline} from "@xenova/transformers";

let summarizer;


export const textSummarizer = async(req)=>{

    try {
        const {text} = await req.json();

        if(!summarizer){
            summarizer= await pipeline(
                "summarization",
                "Xenova/distilbart-cnn-12-6",
            );

            
                    
        }
        const result = await summarizer(text,{max_length:56,min_length:40})
            return new Response(JSON.stringify(result),{
                headers:{ "Content-Type": "application/json"}
            })
    } catch (error) {
        console.error("Summarizer Error:", error); return new Response(JSON.stringify({ error: "Failed to summarize text" }), { status: 500, });
    }
}  