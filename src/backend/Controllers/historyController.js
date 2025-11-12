import { connectDB } from "../Config/db";
import History from "@/backend/model/HistoryModel.js"
import jwt from "jsonwebtoken";


// 🧠 Save Generated Content (AI Tool Output)
export const saveGeneratedContent = async (req) =>{
    try {
        await connectDB()

       // Request body se data lena
       const {  token, toolName, input, output }  = await req.json()


       // Token se userId nikalna
       const decode = jwt.verify(token, process.env.JWT);
       const userId = decode.id

       //History me save kerna

       const history = await History.create({
        userId,
        toolName,
        input,
        output
       })


       return new Response(
        JSON.stringify({
            success:true,
            message:"History saved successfully",
            history
        }),
        {status:201}
       )

    } catch (error) {
         console.error("Error saving content:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Failed to save content" }),
      { status: 500 }
    );
    }
}



// 📜 Fetch User History
export const getUserHistory = async (req)=>{


    try {
        await connectDB()

        
    // URL query se userId nikalna
        const { searchParams } = new URL(req.url);
        const token = searchParams.get("token");

        const decode = jwt.verify( token, process.env.JWT);
        const userId = decode.id;

        // History find karna userId ke basis pe
        const history = await History.find({userId}).sort({createdAt:-1})

        return new Response(JSON.stringify(history), {status:200})



    } catch (error) {
        return new Response(
      JSON.stringify({ message: "Failed to fetch user history" }),
      { status: 500 }
    );
    }
}