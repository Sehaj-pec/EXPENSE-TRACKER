import { Expense } from "../models/expense.model.js"

const addExpense= async (req,res)=> {
   const { title, amount, category , description ,date} = req.body
   
   try {
    //validations
    if(!title || !category || !amount || !description || !date)
        {
            return res
            .status(400)
            .json( { message : "All fields are compulsory "})
        }
    if(amount <= 0 || !amount === "number")
        {
            return res
            .status(400)
            .json( { message : "Amount must be a positive number "})
        }  
    const expense = await Expense.create({
         title,
         amount,
         category,
         description,
         date
    })

    res
    .status(200)
    .json( { message : "Expense Added "} )
   } catch (error) {
        res
        .status(500)
        .json( { message : "Server Error" } )
   }

   
}

const getExpenses =async (req, res)=> {
   try {
      const expenses = await Expense.find().sort({ createdAt : -1 })
      //console.log("got incomes")
      res
      .status(200)
      .json(expenses)
   } catch (error) {
    res
    .status(500)
    .json( { message : "Server Error" } )
   }
}

const deleteExpense =async (req, res)=> {
    const { id }= req.params;
    //console.log(req.params)
    Expense.findByIdAndDelete(id)
        .then((expense) => {
            res
            .status(200)
            .json( { message: "expense deleted" })
        })
        .catch((err)=> {
            res
            .status(500)
            .json( { message : "Server Error " })
        })
 }

export { addExpense , getExpenses, deleteExpense }