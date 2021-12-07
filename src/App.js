import ExpenseList from "./components/Expenses/ExpenseList";
// import React from "react";
const App = () => {
  const expenses = [
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
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(ExpenseList, { expenses: expenses })
  // );
  return (
    <div>
      <h2>Let's get started!</h2>
      <p>This is also visible!</p>
      <ExpenseList expenses={expenses} />
    </div>
  );
};

export default App;
