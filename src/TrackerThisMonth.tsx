import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

const TrackerThisMonth = () => {
  return (
    <Card className="w-full max-w-sm mb-8">
      <div className="ml-4 grid gap-4">
        <Label className="text-gray-400">This Month</Label>
        <Label className="font-bold text-4xl">$0.00</Label>
      </div>
    </Card>
  );
};

export default TrackerThisMonth;
