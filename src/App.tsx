import Header from "./Header";
import Tracker from "./Tracker";
import AddTransaction from "./AddTransaction";
import Transaction from "./Transaction";

import { useEffect, useState } from "react";

function App() {
  const [transactions, setTransactions] = useState([]);

  function total() {
    return transactions.reduce(
      (total, transaction) => total + transaction.amount,
      0
    );
  }

useEffect(() =>{ const saved=localStorage.getItem("transactions")
if(saved){
  setTransactions(JSON.parse(saved))
}},[])

useEffect(()=>{
  localStorage.setItem("transactions",JSON.stringify(transactions))}
,[transactions])

}

  return (
    <>
      <div className="max-w-[1260px] mx-auto mt-8 min-h-screen  px-4">
        <Header />
        <div className="mt-6 grid gap-6 md:grid-cols-3 md:grid-rows-2 ">
          <div className="space-y-6">
            <AddTransaction setTransactions={setTransactions} />
            <Tracker total={total} />
          </div>
          <Transaction transactions={transactions} />
        </div>
      </div>
    </>
  );
}

export default App;
