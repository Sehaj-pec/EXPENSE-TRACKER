import mongoose,{ Schema } from "mongoose";

const expenseSchema = new Schema({
    title : {
        type : String,
        required : true,
        trim : true,
        maxLength : 50
    },
    amount : {
        type : Number,
        required : true,
        maxLength : 20,
        trim : true
    },
    type : {
        type : String,
        default : "expense"
    },
    date : {
        type : Date,
        required : true,
        trim : true
    },
    category : {
        type : String,
        required : true,
        trim : true
    },
    description : {
        type : String,
        required : true,
        trim : true
    }
}, { timestamps : true })

export const Expense = mongoose.model("Expense" , expenseSchema)