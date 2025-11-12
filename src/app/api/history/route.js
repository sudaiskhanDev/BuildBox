import { saveGeneratedContent, getUserHistory } from "@/backend/Controllers/historyController";

// Save generated content (POST)
export async function POST(req) {
    return await saveGeneratedContent(req)
}



// Fetch user history (GET)
export async function GET(req) {
    return await getUserHistory(req)
}