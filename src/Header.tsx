import { Wallet } from "lucide-react";

const Header = () => {
  return (
    <div>
      <div className="flex items-center gap-4">
        <Wallet className="bg-green-600 p-2 rounded-xl w-12 h-12 text-white"></Wallet>
        <h1 className="font-bold text-3xl ">Expense Tracker</h1>
      </div>
      <p className="mt-2 text-gray-500">
        Track your spending and manage your finances with ease
      </p>
    </div>
  );
};

export default Header;
