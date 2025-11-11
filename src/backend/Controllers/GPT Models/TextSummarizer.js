import { pipeline  } from "@xenova/transformers";

let summarizer; 
export const textSummarizer = async (req)=>{

  try {
     const { text } = await req.json()

     if(!summarizer){
      summarizer = await pipeline(
        "summarization",
        "Xenova/distilbart-cnn-12-6",
        )
     }

     const result = await summarizer(text, {max_lenght:100, min_lenght:60})

     return new Response(JSON.stringify(result),{
      header:{"Content-Type":"application/json"}
     } ,{status:200})


  } catch (error) {
      console.error("Summarizer Error: ", error);
      return new Response(JSON.stringify({error:" Failed to Summarize Text "}),
    {status:500})
  }
}