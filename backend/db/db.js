import mongoose from "mongoose";

const db = async () =>{
    try{
        mongoose.set('strictQuery', false)
        await mongoose.connect(`${process.env.MONGO_URL}expenseTracker`)
        console.log(" MongoDB connected !! ");
    }catch(error){
        console.log("MONGODB connection error ", error);
        
    }
}

export default db;