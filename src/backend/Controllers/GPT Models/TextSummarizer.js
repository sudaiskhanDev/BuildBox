import axios from "axios";

export const textSummarizer = async (req) => {
  try {
    const { text } = await req.json();

    const response = await axios.post(
      "https://router.huggingface.co/hf-inference/facebook/bart-large-cnn",
      {
        inputs: text,
        parameters: { max_new_tokens: 60 } // optional, recommended
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    // HF Router sometimes returns object with generated_text
    const summary =
      response.data?.generated_text || response.data?.[0]?.summary_text || "Could not generate summary";

    return new Response(
      JSON.stringify({ textsummary: summary }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Summarizer Error:", error.response?.data || error.message);
    return new Response(
      JSON.stringify({ error: error.response?.data || "Failed to summarize text" }),
      { status: 500 }
    );
  }
};
