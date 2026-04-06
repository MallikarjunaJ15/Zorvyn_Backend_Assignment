import { Pencil, Trash2, ArrowUpRight, ArrowDownLeft } from "lucide-react";
import { useState } from "react";

const TransactionTable = ({
  isEditOpen,
  setIsEditOpen,
  isDeleteOpen,
  setIsDeleteOpen,
  data,
  setSelectedTransaction,
}) => {
  return (
    <div className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-200 text-sm">
          <thead className="text-xs text-gray-400 border-b border-white/10 tracking-wider">
            <tr>
              <th className="px-6 py-4 text-left">DATE</th>
              <th className="px-6 py-4 text-left">TYPE</th>
              <th className="px-6 py-4 text-left">CATEGORY</th>
              <th className="px-6 py-4 text-left">NOTE</th>
              <th className="px-6 py-4 text-right">AMOUNT</th>
              <th className="px-6 py-4 text-center">ACTIONS</th>
            </tr>
          </thead>

          <tbody>
            {data?.transactions?.map((item, i) => {
              const isIncome = item.type === "income";

              return (
                <tr
                  key={i}
                  className="border-b border-white/5 hover:bg-white/5 transition"
                >
                  <td className="px-6 py-4 text-gray-300">
                    {item.date.split("T")[0]}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center gap-1 px-3 py-1 text-xs rounded-md font-medium
                        ${
                          isIncome
                            ? "bg-emerald-400/10 text-emerald-400"
                            : "bg-red-500/10 text-red-400"
                        }`}
                    >
                      {isIncome ? (
                        <ArrowUpRight size={14} />
                      ) : (
                        <ArrowDownLeft size={14} />
                      )}
                      {item.type}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <span className="px-3 py-1 text-xs border border-white/10 rounded-md text-gray-300 bg-black/40">
                      {item.category}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-gray-300 max-w-[250px] truncate">
                    {item.note}
                  </td>

                  <td
                    className={`px-6 py-4 text-right font-semibold ${
                      isIncome ? "text-emerald-400" : "text-red-400"
                    }`}
                  >
                    {item.amount}
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-3 text-gray-400">
                      <Pencil
                        onClick={() => {
                          setSelectedTransaction(item);
                          setIsEditOpen(true);
                        }}
                        size={16}
                        className="cursor-pointer hover:text-white transition"
                      />
                      <Trash2
                        onClick={() => {
                          setSelectedTransaction(item);
                          setIsDeleteOpen(true);
                        }}
                        size={16}
                        className="cursor-pointer hover:text-red-400 transition"
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between px-6 py-4 text-sm text-gray-400">
        <p>Page 1 of 3 (20 records)</p>

        <div className="flex gap-2">
          {[1, 2, 3].map((num) => (
            <button
              key={num}
              className={`w-8 h-8 rounded-md flex items-center justify-center
                ${
                  num === 1
                    ? "bg-emerald-400/20 text-emerald-400"
                    : "hover:bg-white/10"
                }`}
            >
              {num}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransactionTable;
