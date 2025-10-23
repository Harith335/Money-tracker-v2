import Header from "./Header";
import Tracker from "./Tracker";
import AddTransaction from "./AddTransaction";
// import TrackerThisMonth from "./TrackerThisMonth";
import Transaction from "./Transaction";

import { useState } from "react";

function App() {
  const [transactions, setTransactions] = useState([]);

  function total() {
    return transactions.reduce(
      (total, transaction) => total + transaction.amount,
      0
    );
  }

  const totalIncome = transactions
    .filter((transactions) => transactions.amount > 0)
    .reduce((total, transactions) => total + transactions.amount, 0);

  const totalExpense = transactions
    .filter((transactions) => transactions.amount < 0)
    .reduce((total, transactions) => total + transactions.amount, 0);

  return (
    <>
      <div className="max-w-[1260px] mx-auto mt-8 min-h-screen  px-4">
        <Header />
        <div className="mt-6 grid gap-6 md:grid-cols-3 md:grid-rows-2 ">
          <div className="space-y-6">
            <AddTransaction setTransactions={setTransactions} />
            <Tracker totalIncome={totalIncome} totalExpense={totalExpense} />
            {/* <TrackerThisMonth /> */}
          </div>
          <Transaction transactions={transactions} />
        </div>
      </div>
    </>
  );
}

export default App;
