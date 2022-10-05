import ExpenseForm from "./ExpenseForm"
import './NewExpense.css'
function NewExpense(props) {

    function onSaveExpenseDataHandler(expense) {
      const enteredExpense = {
        ...expense,
        id:Math.random().toString()
      }
      console.log(enteredExpense)
      props.onAddExpense(enteredExpense);

    }
    
    return (
    <div className="new-expense">
    <ExpenseForm onSaveEnpenseData={onSaveExpenseDataHandler}/>
    </div>
    )
}

export default NewExpense;