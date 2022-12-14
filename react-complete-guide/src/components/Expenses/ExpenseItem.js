import {useState} from 'react';
import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  const[title, setTitle] = useState(props.title);
  const onClickHandler = () => {
    setTitle("updated");
    console.log(title);
  }
  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={onClickHandler}>click me</button>
    </Card>
    </li> 
  );
}
export default ExpenseItem;
