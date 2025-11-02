import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.KEY,
});

export default openai;