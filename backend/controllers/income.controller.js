import { Income }  from "../models/income.model.js"

const addIncome= async (req,res)=> {
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
    const income = await Income.create({
         title,
         amount,
         category,
         description,
         date
    })

    res
    .status(200)
    .json( { message : "Income Added "} )
   } catch (error) {
        res
        .status(500)
        .json( { message : "Server Error" } )
   }

   
}

const getIncomes =async (req, res)=> {
   try {
      const incomes = await Income.find().sort({ createdAt : -1 })
      //console.log("got incomes")
      res
      .status(200)
      .json(incomes)
   } catch (error) {
    res
    .status(500)
    .json( { message : "Server Error" } )
   }
}

const deleteIncome =async (req, res)=> {
    const { id }= req.params;
    //console.log(req.params)
    Income.findByIdAndDelete(id)
        .then((income) => {
            res
            .status(200)
            .json( { message: "income deleted" })
        })
        .catch((err)=> {
            res
            .status(500)
            .json( { message : "Server Error " })
        })
 }

export { addIncome , getIncomes , deleteIncome }