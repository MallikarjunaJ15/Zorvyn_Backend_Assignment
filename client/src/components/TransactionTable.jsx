import { Pencil, Trash2, ArrowUpRight, ArrowDownLeft } from "lucide-react";

const TransactionTable = ({
  isEditOpen,
  setIsEditOpen,
  isDeleteOpen,
  setIsDeleteOpen,
}) => {
  const data = [
    {
      date: "Feb 1, 25",
      type: "INCOME",
      category: "Salary",
      note: "February salary deposit",
      amount: "+$8,500",
    },
    {
      date: "Feb 3, 25",
      type: "EXPENSE",
      category: "Rent",
      note: "Monthly apartment rent",
      amount: "-$1,200",
    },
    {
      date: "Feb 5, 25",
      type: "INCOME",
      category: "Freelance",
      note: "Client project - UI redesign",
      amount: "+$2,400",
    },
    {
      date: "Feb 6, 25",
      type: "EXPENSE",
      category: "Food",
      note: "Weekly grocery run",
      amount: "-$340",
    },
    {
      date: "Feb 7, 25",
      type: "EXPENSE",
      category: "Transport",
      note: "Uber rides this week",
      amount: "-$89",
    },
    {
      date: "Feb 8, 25",
      type: "INCOME",
      category: "Investment",
      note: "Stock dividends - Q4",
      amount: "+$5,000",
    },
  ];

  return (
    <div className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
      {/* TABLE WRAPPER (IMPORTANT FOR RESPONSIVE) */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px] text-sm">
          {/* HEADER */}
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

          {/* BODY */}
          <tbody>
            {data.map((item, i) => {
              const isIncome = item.type === "INCOME";

              return (
                <tr
                  key={i}
                  className="border-b border-white/5 hover:bg-white/5 transition"
                >
                  {/* DATE */}
                  <td className="px-6 py-4 text-gray-300">{item.date}</td>

                  {/* TYPE */}
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

                  {/* CATEGORY */}
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
                        onClick={() => setIsEditOpen(true)}
                        size={16}
                        className="cursor-pointer hover:text-white transition"
                      />
                      <Trash2
                        onClick={() => setIsDeleteOpen(true)}
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
