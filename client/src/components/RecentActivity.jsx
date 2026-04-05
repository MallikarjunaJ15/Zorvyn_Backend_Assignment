import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const activities = [
  {
    title: "February salary deposit",
    type: "Salary",
    amount: "+$8,500",
    positive: true,
  },
  {
    title: "Monthly apartment rent",
    type: "Rent",
    amount: "-$1,200",
    positive: false,
  },
  {
    title: "Client project - UI redesign",
    type: "Freelance",
    amount: "+$2,400",
    positive: true,
  },
  {
    title: "Weekly grocery run",
    type: "Food",
    amount: "-$340",
    positive: false,
  },
  {
    title: "Uber rides this week",
    type: "Transport",
    amount: "-$89",
    positive: false,
  },
  {
    title: "Stock dividends - Q4",
    type: "Investment",
    amount: "+$5,000",
    positive: true,
  },
];

const RecentActivity = () => {
  return (
    <div className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
      
      <div className="flex items-center gap-2 mb-6">
        <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
        <h2 className="text-lg font-semibold">Recent Activity</h2>
      </div>

      <div className="space-y-5">
        {activities.map((item, i) => (
          <div
            key={i}
            className="flex justify-between items-center border-b border-white/5 pb-3"
          >
            <div className="flex items-center gap-3">
              
              <div
                className={`p-2 rounded-md ${
                  item.positive
                    ? "bg-emerald-400/10"
                    : "bg-red-500/10"
                }`}
              >
                {item.positive ? (
                  <ArrowUpRight className="text-emerald-400" size={16} />
                ) : (
                  <ArrowDownRight className="text-red-500" size={16} />
                )}
              </div>
              <div>
                <p className="text-sm font-medium">
                  {item.title}
                </p>
                <p className="text-xs text-gray-400">
                  {item.type}
                </p>
              </div>
            </div>

            <p
              className={`font-semibold ${
                item.positive
                  ? "text-emerald-400"
                  : "text-red-500"
              }`}
            >
              {item.amount}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;