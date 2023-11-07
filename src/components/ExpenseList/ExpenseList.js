import React from "react";
import styles from "./ExpenseList.module.css";
import Transaction from "../Transaction/Transaction";

const ExpenseList = ({ expenses, deleteExpense, changeExpenseToUpdate }) => {
  return (
    <>
    <div className={`p-4 ${styles.expenseListContainer}`}>
      <h3>Transactions</h3>
      <ul className={styles.transactionList}>
        {expenses.map((expense, i) => {
          return (
            <Transaction
              index={i}
              key={expense.id}
              expense={expense}
              deleteExpense={deleteExpense}
              changeExpenseToUpdate={changeExpenseToUpdate}
            />
          );
        })}
      </ul>
    </div>
    <div className="">
      <button className="btn btn-primary mt-5 ">
Download
      </button>
    </div>
    </>
  );
};

export default ExpenseList;
