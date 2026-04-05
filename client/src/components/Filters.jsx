import { useState } from "react";

const Filters = () => {
  const [typeOpen, setTypeOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <input
        placeholder="Search transactions..."
        className="flex-1 bg-zinc-900 border border-white/10 px-4 py-2 rounded-lg outline-none"
      />
      <div className="relative">
        <button
          onClick={() => setTypeOpen(!typeOpen)}
          className="bg-zinc-900 px-4 py-2 border border-white/10 rounded-lg"
        >
          All Types
        </button>
        {typeOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-zinc-900 border border-white/10 rounded-lg">
            {["All Types", "Income", "Expense"].map((item) => (
              <div
                key={item}
                className="px-4 py-2 hover:bg-white/10 cursor-pointer"
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="relative">
        <button
          onClick={() => setCatOpen(!catOpen)}
          className="bg-zinc-900 px-4 py-2 border border-white/10 rounded-lg"
        >
          All category
        </button>

        {catOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-zinc-900 border border-white/10 rounded-lg max-h-60 overflow-y-auto">
            {[
              "All Categories",
              "Salary",
              "Freelance",
              "Investment",
              "Business",
              "Rent",
              "Food",
            ].map((item) => (
              <div
                key={item}
                className="px-4 py-2 hover:bg-white/10 cursor-pointer"
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Filters;