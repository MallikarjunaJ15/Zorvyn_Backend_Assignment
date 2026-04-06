import { useState } from "react";

const Filters = ({ filters, setFilters }) => {
  const [typeOpen, setTypeOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const handleChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4 w-full">
      <input
        value={filters.search}
        onChange={(e) => handleChange("search", e.target.value)}
        placeholder="Search transactions..."
        className="flex-1 bg-zinc-900 border border-white/10 px-4 py-2 rounded-lg outline-none"
      />

      <div className="flex gap-2 w-full md:w-auto">
        <input
          type="date"
          value={filters.startDate}
          onChange={(e) => handleChange("startDate", e.target.value)}
          className="bg-zinc-900 border border-white/10 px-3 py-2 rounded-lg text-sm"
        />

        <input
          type="date"
          value={filters.endDate}
          onChange={(e) => handleChange("endDate", e.target.value)}
          className="bg-zinc-900 border border-white/10 px-3 py-2 rounded-lg text-sm"
        />
      </div>
      <div className="relative">
        <button
          onClick={() => setTypeOpen(!typeOpen)}
          className="bg-zinc-900 px-4 py-2 border border-white/10 rounded-lg w-full"
        >
          {filters.type || "All Types"}
        </button>
        {typeOpen && (
          <div className="absolute z-50 mt-2 w-40 bg-zinc-900 border border-white/10 rounded-lg">
            {["income", "expense"].map((t) => (
              <div
                key={t}
                onClick={() => {
                  handleChange("type", t);
                  setTypeOpen(false);
                }}
                className="px-3 py-2 hover:bg-white/10 cursor-pointer capitalize"
              >
                {t}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="relative">
        <button
          onClick={() => setCatOpen(!catOpen)}
          className="bg-zinc-900 px-4 py-2 border border-white/10 rounded-lg w-full"
        >
          {filters.category || "All Category"}
        </button>

        {catOpen && (
          <div className="absolute z-50 mt-2 w-48 bg-zinc-900 border border-white/10 rounded-lg max-h-60 overflow-y-auto">
            {[
              "Salary",
              "Freelance",
              "Investment",
              "Rent",
              "Food",
              "Transport",
              "Utilities",
              "Healthcare",
              "Education",
              "Entertainment",
              "Shopping",
              "Infra",
              "Tools",
              "Tax",
              "Other",
            ].map((cat) => (
              <div
                key={cat}
                onClick={() => {
                  handleChange("category", cat);
                  setCatOpen(false);
                }}
                className="px-3 py-2 hover:bg-white/10 cursor-pointer"
              >
                {cat}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Filters;
