import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./ExpenseList.css";
import { useState } from "react";

const ExpenseList = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

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
  const filterChangedHandler = (selectedYear) => {
    console.log("in ExpenseList.js");
    setFilteredYear(selectedYear);
  };
  return (
    <Card className={"expenses"}>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangedHandler}
      />
      {expensesList}
    </Card>
  );
};

export default ExpenseList;
