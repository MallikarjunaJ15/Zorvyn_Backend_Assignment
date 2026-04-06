const TransactionModal = ({ onClose, input, setInput, onSubmit }) => {
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-zinc-900 p-6 rounded-xl w-full max-w-lg border border-white/10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">New Transaction</h2>
          <button onClick={onClose}>✕</button>
        </div>

        <div className="space-y-4">
          <div className="flex gap-4">
            <input
              type="number"
              name="amount"
              value={input.amount}
              onChange={handleChange}
              placeholder="Amount"
              className="flex-1 bg-black border border-emerald-400 px-3 py-2 rounded"
            />
            <input
              type="date"
              name="date"
              value={input.date}
              onChange={handleChange}
              className="flex-1 bg-black border border-white/10 px-3 py-2 rounded"
            />
          </div>

          <div className="flex gap-4">
            <select
              name="type"
              value={input.type}
              onChange={handleChange}
              className="flex-1 bg-black border border-white/10 p-2 rounded"
            >
              <option value="">Select Type</option>
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select>

            <select
              name="category"
              value={input.category}
              onChange={handleChange}
              className="flex-1 bg-black border border-white/10 p-2 rounded"
            >
              <option value={"Salary"}>Salary</option>
              <option value={"Freelance"}>Freelance</option>
              <option value={"Investment"}>Investment</option>
              <option value={"Rent"}>Rent</option>
              <option value={"Food"}>Food</option>
              <option value={"Transport"}>Transport</option>
              <option value={"Utilities"}>Utilities</option>
              <option value={"Healthcare"}>Healthcare</option>
              <option value={"Education"}>Education</option>
              <option value={"Entertainment"}>Entertainment</option>
              <option value={"Shopping"}>Shopping</option>
              <option value={"Infra"}>Infra</option>
              <option value={"Tools"}>Tools</option>
              <option value={"Tax"}>Tax</option>
              <option value={"Other"}>Other</option>
            </select>
          </div>

          <textarea
            name="note"
            value={input.note}
            onChange={handleChange}
            placeholder="Transaction note..."
            className="w-full bg-black border border-white/10 p-2 rounded"
          />

          <div className="flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-white/10 rounded"
            >
              CANCEL
            </button>

            <button
              onClick={onSubmit}
              className="px-4 py-2 bg-emerald-400 text-black rounded font-semibold"
            >
              CREATE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionModal;
