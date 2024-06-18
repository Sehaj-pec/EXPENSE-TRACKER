import { Router } from "express"
import { addIncome, getIncomes , deleteIncome} from "../controllers/income.controller.js";
import { addExpense, deleteExpense, getExpenses } from "../controllers/expense.controller.js";

const router=Router();

router.route('/add-income').post(addIncome)
router.route('/get-incomes').get(getIncomes)
router.route('/delete-income/:id').delete(deleteIncome)

router.route('/add-expense').post(addExpense)
router.route('/get-expenses').get(getExpenses)
router.route('/delete-expense/:id').delete(deleteExpense)

export default router