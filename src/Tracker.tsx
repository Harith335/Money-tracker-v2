import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const Tracker = ({ total }) => {
  return (
    <Card className="w-full max-w-sm">
      <div className="ml-4 grid gap-4">
        <Label className="text-gray-400">Total Expenses</Label>
        <Label className="font-bold text-4xl">${total}</Label>
      </div>
    </Card>
  );
};

export default Tracker;
