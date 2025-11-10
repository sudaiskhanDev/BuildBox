import { pipeline  } from "@xenova/transformers";

let summarizer;

export default async function textSummarizer(req , res) {

    try {
        
        const { text } = req.body;
        
        if(!summarizer){
            summarizer = await pipeline(
                "summarization",
                "Xenova/distilbart-cnn-12-6")
        }

        const result = await summarizer(text,{max_leght:150, min_lenght:50})
        res.status(200).json({ summary: result[0].summary_text });
    } catch (error) {
          console.error("Summarizer Error:", error);
    res.status(500).json({ error: "Failed to summarize text" });
    }
    
}