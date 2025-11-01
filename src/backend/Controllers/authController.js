import jwt from "jsonwebtoken";
import User from "@/backend/Models/UserModel.js"
import { connectDB} from "@/backend/Config/db.js"



// 🧱 Register Controller
export const registerUser = async (req) =>{

    await connectDB();
    const {name,email,password} = req.body;

    //Check Existing User

    const existingUser = await User.findOne({email});

    if(existingUser){
        return new Response(JSON.stringify({ message:"User already exists"}),
        {status:400})
    
    }

    // Create User

    const user = await User.create({name,email,password});

    return new Response(JSON.stringify
        (
            {
                message:"User created successfully",
                user:{
                        id:user_id,
                        name:user.name,
                        email:user.email,
                    },
            }
        ),
        {status:201}
    
    )   

}


// 🔐 Login Controller

export const loginUser = async (req)=>{
    await connectDB();
    const {email,password} = req.body;

    const user = await User.findOne({email});

    if(!user){
        return new Response(JSON.stringify({ message: "User not found" }), {
      status: 404,
    });
    }
}