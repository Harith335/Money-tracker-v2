import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const AddTransaction = ({ setTransactions }) => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const transactionData = {
      amount: parseFloat(amount),
      description,
      category,
      id: Date.now(),
    };

    setTransactions((prev) => [...prev, transactionData]);

    setAmount("");
    setDescription("");
    setCategory("");
    setErrorMessage("");
  };

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Add Expense</CardTitle>
        <CardDescription>
          Record a new expense to track your spending
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={onSubmit}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="amount">Amount</Label>
              <Input
                id="amount"
                type="number"
                placeholder="0.00"
                required
                onChange={(e) => setAmount(e.target.value)}
                value={amount}
                min={1}
                max={100000}
              />
            </div>

            <div>
              <Label htmlFor="category" className="mb-2.5">
                Category
              </Label>
              <Select value={category} onValueChange={setCategory} required>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Food & Dining">Food & Dining</SelectItem>
                    <SelectItem value="Transportation">
                      Transportation
                    </SelectItem>
                    <SelectItem value="Shopping">Shopping</SelectItem>
                    <SelectItem value="Entertainment">Entertainment</SelectItem>
                    <SelectItem value="Bills">Bills</SelectItem>
                    <SelectItem value="Healthcare">Healthcare</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                type="text"
                placeholder="What did you spend on"
                required
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
            </div>

            <CardFooter className="flex-col gap-2 mt-4">
              <Button type="submit" className="w-full">
                Add Expense
              </Button>
            </CardFooter>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddTransaction;
