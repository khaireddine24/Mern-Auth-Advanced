import mongoose from "mongoose";

export const ConnectDB=async()=>{
    try{
        console.log("mongoURI: ",process.env.MONGO_URI);
        const conn=await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }
    catch(err){
        console.error("Error Connection to Mongo ",err);
        process.exit(1);
    }
    
}