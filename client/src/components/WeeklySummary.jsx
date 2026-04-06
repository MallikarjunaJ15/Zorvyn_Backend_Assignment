import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const WeeklySummary = ({ data }) => {
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

      {!data?.length ? (
        <div className="h-[220px] flex items-center justify-center text-gray-500">
          No weekly data
        </div>
      ) : view === "chart" ? (
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#222" />

            <XAxis dataKey="name" stroke="#666" />

            <Tooltip formatter={(value) => `₹${value}`} />

            <Bar
              dataKey="value"
              fill="#34d399"
              radius={[6, 6, 0, 0]}
              animationDuration={1000}
            />
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <div className="space-y-2 text-sm">
          {data.map((d, i) => (
            <div key={i} className="flex justify-between">
              <span className="text-gray-400">{d.name}</span>
              <span className="text-white font-medium">₹{d.value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WeeklySummary;
