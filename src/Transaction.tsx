import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Trash } from "lucide-react";

const Transaction = ({ transactions, onDelete }) => {
  return (
    <Card className="h-[400px] w-full col-span-2 overflow-y-auto">
      <CardHeader>
        <CardTitle>Recent Expenses</CardTitle>
        <CardDescription>
          {transactions.length === 0
            ? "No expenses yet"
            : `${transactions.length} transactions`}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {transactions.length === 0 ? (
          <div className="text-center text-gray-500">
            Add your first expense to get started.
          </div>
        ) : (
          transactions.map((tx) => (
            <div
              key={tx.id}
              className="border-b pb-4 px-4 flex justify-between items-center shadow-sm rounded-md bg-white"
            >
              <div>
                <p className="font-semibold">{tx.description}</p>
                <p className="text-sm text-gray-500">{tx.category}</p>
              </div>

              <div className="flex items-center gap-3">
                <p className={"text-sm "}>${tx.amount.toFixed(2)}</p>
                <Trash
                  onClick={() => onDelete(tx.id)}
                  className="text-red-500 text-sm cursor-pointer hover:scale-105 transition-transform"
                />
              </div>
            </div>
          ))
        )}
      </CardContent>
    </Card>
  );
};

export default Transaction;
