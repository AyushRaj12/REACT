
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
   
  return (
    <div className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      ></ExpensesFilter>
      <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
      <ExpensesList items={filteredExpenses}></ExpensesList>
      {/*{filteredExpenses.length === 0 ? (
        <p>No expenses found.</p>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        ))
      )}
      <ExpenseItem
        title={props.expenses_items[0].title}
        amount={props.expenses_items[0].amount}
        date={props.expenses_items[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses_items[1].title}
        amount={props.expenses_items[1].amount}
        date={props.expenses_items[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses_items[2].title}
        amount={props.expenses_items[2].amount}
        date={props.expenses_items[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses_items[3].title}
        amount={props.expenses_items[3].amount}
        date={props.expenses_items[3].date}
      ></ExpenseItem>*/}
    </div>
  );
}
export default Expenses;
