import { PieChart, Pie, ResponsiveContainer, Tooltip, Cell } from "recharts";

const PieChartComp = ({ data }) => {
  return (
    <div className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
      <h2 className="text-lg font-semibold mb-4">By Category</h2>

      {!data?.length ? (
        <div className="h-60 flex items-center justify-center text-gray-500">
          No category data
        </div>
      ) : (
        <div className="flex flex-col gap-6 items-center">
          {/* CHART */}
          <div className="w-full md:w-1/2 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Tooltip formatter={(value) => `₹${value}`} />

                <Pie
                  data={data}
                  innerRadius={70}
                  outerRadius={100}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={index} fill={entry.fill} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="w-full md:w-1/2 grid grid-cols-2 gap-3 text-sm">
            {data.map((item, i) => (
              <div key={i} className="flex justify-between items-center">
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
                  ₹{item.value} 
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PieChartComp;
