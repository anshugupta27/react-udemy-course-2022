import "./ExpenseForm.css";
import { useState } from "react";
function ExpenseForm(props) {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
  function titleChangeHandler(e) {
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: e.target.value };
    });
  }
  function amountChangeHandler(e) {
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: e.target.value };
    });
  }
  function dateChangeHandler(e) {
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: e.target.value };
    });
  }
  function submitFormHandler(event) {
    event.preventDefault();
   
     const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate)
    }
    props.onSaveEnpenseData(expenseData);
    setUserInput((prevState) => {
        return {
            ...prevState,
            enteredTitle:'',
            enteredAmount:'',
            enteredDate:''
        }
    })
   
  }
  return (
    <form onSubmit={submitFormHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input 
           type="text" 
           onChange={titleChangeHandler} 
           value={userInput.enteredTitle}
           />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={userInput.enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-01-10"
            onChange={dateChangeHandler}
            value={userInput.enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
