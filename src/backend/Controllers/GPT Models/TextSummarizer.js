import { pipeline } from "@xenova/transformers";

let summarizer;

export default async function textSummarizer(req) {
  try {
    const { text } = await req.json();

    if (!summarizer) {
      summarizer = await pipeline("summarization", "Xenova/distilbart-cnn-12-6");
    }

    const result = await summarizer(text, { max_length: 150, min_length: 50 });

    return new Response(
      JSON.stringify({ textsummarizer: result[0].summary_text }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Summarizer Error:", error);
    return new Response(JSON.stringify({ error: "Failed to summarize text" }), {
      status: 500,
    });
  }
}
