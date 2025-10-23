import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Transaction = ({ transactions }) => {
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
            <div key={tx.id} className="border-b pb-2">
              <p className="font-semibold">{tx.description}</p>
              <p className="text-sm text-gray-500">{tx.category}</p>
              <p
                className={`text-sm ${
                  tx.amount > 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                ${tx.amount.toFixed(2)}
              </p>
            </div>
          ))
        )}
      </CardContent>
    </Card>
  );
};

export default Transaction;
