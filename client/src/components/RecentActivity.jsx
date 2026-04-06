import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const RecentActivity = ({ data }) => {
  const formatData = (data) => {
    return (
      data?.map((item) => ({
        title: item.note || "No description",
        type: item.category,
        amount: `${item.type === "income" ? "+" : "-"}₹${item.amount}`,
        positive: item.type === "income",
      })) || []
    );
  };

  const activities = formatData(data);

  return (
    <div className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
        <h2 className="text-lg font-semibold">Recent Activity</h2>
      </div>

      {!activities.length ? (
        <div className="text-center text-gray-500 py-10">
          No recent transactions
        </div>
      ) : (
        <div className="space-y-5">
          {activities.map((item, i) => (
            <div
              key={i}
              className="flex justify-between items-center border-b border-white/5 pb-3"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`p-2 rounded-md ${
                    item.positive ? "bg-emerald-400/10" : "bg-red-500/10"
                  }`}
                >
                  {item.positive ? (
                    <ArrowUpRight className="text-emerald-400" size={16} />
                  ) : (
                    <ArrowDownRight className="text-red-500" size={16} />
                  )}
                </div>

                <div>
                  <p className="text-sm font-medium">{item.title}</p>
                  <p className="text-xs text-gray-400">{item.type}</p>
                </div>
              </div>

              {/* RIGHT */}
              <p
                className={`font-semibold ${
                  item.positive ? "text-emerald-400" : "text-red-500"
                }`}
              >
                {item.amount}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentActivity;
