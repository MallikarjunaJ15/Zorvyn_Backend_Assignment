import { PieChart, Pie, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Rent", value: 2400, fill: "#22d3ee" },
  { name: "Tax", value: 2100, fill: "#f43f5e" },
  { name: "Food", value: 1010, fill: "#22c55e" },
  { name: "Healthcare", value: 450, fill: "#f97316" },
  { name: "Infra", value: 980, fill: "#a855f7" },
  { name: "Shopping", value: 520, fill: "#eab308" },
];

const PieChartComp = () => {
  return (
    <div className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
      <h2 className="text-lg font-semibold mb-4">
        By Category
      </h2>

      <div className="flex flex-col gap-6 items-center">
        <div className="w-full md:w-1/2 h-62.5">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                innerRadius={70}
                outerRadius={100}
                paddingAngle={3}
                dataKey="value"
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="w-full md:w-1/2 grid grid-cols-2 gap-3 text-sm">
          {data.map((item, i) => (
            <div key={i} className="flex justify-between">
              <div className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-sm"
                  style={{ backgroundColor: item.fill }}
                />
                <span className="text-gray-400">
                  {item.name}
                </span>
              </div>
              <span className="text-white font-medium">
                ${item.value}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default PieChartComp;