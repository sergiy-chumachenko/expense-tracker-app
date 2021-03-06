import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 294.65,
    date: new Date(2021, 2, 26),
  },
  {
    id: "e2",
    title: "Toilet Paper",
    amount: 31.65,
    date: new Date(2021, 2, 27),
  },
  {
    id: "e3",
    title: "Car Washing",
    amount: 22.65,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "Car Oil",
    amount: 30.65,
    date: new Date(2021, 2, 28),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses(() => {
      return [expense, ...expenses];
    });
  };
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(ExpenseList, { expenses: expenses })
  // );
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
