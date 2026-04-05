import { useState } from "react";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Feb 12", value: 3200 },
  { name: "Feb 13", value: 200 },
  { name: "Feb 14", value: 700 },
  { name: "Feb 15", value: 400 },
  { name: "Feb 16", value: 1800 },
  { name: "Feb 17", value: 900 },
  { name: "Feb 18", value: 100 },
  { name: "Feb 19", value: 2100 },
];

const WeeklySummary = () => {
  const [view, setView] = useState("chart");

  return (
    <div className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
     
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Weekly Summary</h2>
        <span className="text-xs bg-purple-600/20 text-purple-400 px-3 py-1 rounded">
          LAST 7 DAYS
        </span>
      </div>
      <div className="flex bg-black/40 rounded-lg p-1 mb-4">
        <button
          onClick={() => setView("chart")}
          className={`flex-1 py-1 rounded ${
            view === "chart"
              ? "bg-emerald-400/20 text-emerald-400"
              : "text-gray-400"
          }`}
        >
          CHART
        </button>
        <button
          onClick={() => setView("list")}
          className={`flex-1 py-1 rounded ${
            view === "list"
              ? "bg-emerald-400/20 text-emerald-400"
              : "text-gray-400"
          }`}
        >
          LIST
        </button>
      </div>
      {view === "chart" ? (
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="#666" />
            <Tooltip />
            <Bar dataKey="value" fill="#34d399" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <div className="space-y-2 text-sm">
          {data.map((d, i) => (
            <div key={i} className="flex justify-between">
              <span className="text-gray-400">{d.name}</span>
              <span>${d.value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WeeklySummary;
