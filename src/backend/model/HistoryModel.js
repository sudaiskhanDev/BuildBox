import mongoose from "mongoose";
// 

const historySchema = new mongoose.Schema({

    userId:{
        type:String,
        required:true
    
    },

    toolName:{
        type:String,
    },
    input:{
        type:String
    },
    output:{
        type:String 
    },
    createdAt:{
        type:String,
        default:Date.now()
    }
})

export default mongoose.models.History || mongoose.model("History",historySchema)