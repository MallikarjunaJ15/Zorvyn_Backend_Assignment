import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const TrendChart = ({ data }) => {
  return (
    <div className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Monthly Trends</h2>
      </div>
      <ResponsiveContainer width="100%" height={260}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="income" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#34d399" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#34d399" stopOpacity={0} />
            </linearGradient>

            <linearGradient id="expense" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#f43f5e" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" stroke="#222" />

          <XAxis dataKey="name" stroke="#666" />

          <Tooltip
            contentStyle={{
              backgroundColor: "#0a0a0a",
              border: "1px solid #1f1f1f",
              borderRadius: "8px",
            }}
            formatter={(value) => `₹${value}`}
          />

          <Area
            isAnimationActive
            animationDuration={1200}
            type="monotone"
            dataKey="income"
            stroke="#34d399"
            fill="url(#income)"
            strokeWidth={2}
          />

          <Area
            isAnimationActive
            animationDuration={1200}
            type="monotone"
            dataKey="expense"
            stroke="#f43f5e"
            fill="url(#expense)"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
export default TrendChart;
