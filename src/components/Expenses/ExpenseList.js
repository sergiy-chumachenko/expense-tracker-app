import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./ExpenseList.css";
import { useState } from "react";

const ExpenseList = (props) => {
  const [filteredYear, setFilteredYear] = useState(
    new Date().getFullYear().toString()
  );
  const filterChangedHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const expensesList = props.expenses
    .filter((item) => item.date.getFullYear().toString() === filteredYear)
    .map((item) => {
      return (
        <ExpenseItem
          title={item.title}
          amount={item.amount}
          date={item.date}
          key={item.id}
        />
      );
    });

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
