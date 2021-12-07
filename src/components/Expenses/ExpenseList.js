import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  const expensesList = props.expenses.map((item) => {
    return (
      <ExpenseItem
        title={item.title}
        amount={item.amount}
        date={item.date}
        key={(Math.random() + 1).toString(36).substring(7)}
      />
    );
  });
  return <Card className={"expenses"}>{expensesList}</Card>;
};

export default ExpenseList;
