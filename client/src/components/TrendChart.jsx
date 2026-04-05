import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Feb 12", income: 3200, expense: 1200 },
  { name: "Feb 13", income: 800, expense: 600 },
  { name: "Feb 14", income: 400, expense: 300 },
  { name: "Feb 15", income: 1200, expense: 700 },
  { name: "Feb 16", income: 1600, expense: 900 },
  { name: "Feb 17", income: 900, expense: 800 },
  { name: "Feb 18", income: 100, expense: 200 },
  { name: "Feb 19", income: 2100, expense: 1100 },
];

const TrendChart = () => {
  return (
    <div className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
      <h2 className="text-lg font-semibold mb-4">
        Monthly Trends
      </h2>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#666" />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="income"
            stroke="#34d399"
            strokeWidth={3}
            dot={false}
          />

          <Line
            type="monotone"
            dataKey="expense"
            stroke="#f43f5e"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TrendChart;