const EditModal = ({ open, onClose, data, input, setInput, onSubmit }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-zinc-900 border border-white/10 rounded-xl w-125 p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Edit Transaction</h2>
          <button onClick={onClose}>✕</button>
        </div>
        <p className="text-gray-400 mb-6">
          Update the transaction details below.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="number"
            placeholder="Amount"
            value={input.amount}
            onChange={(e) => setInput({ ...input, amount: e.target.value })}
            className="bg-black border border-white/10 p-2 rounded-md focus:border-emerald-400 outline-none"
          />
          <input
            type="date"
            value={input.date ? input.date.split("T")[0] : ""}
            onChange={(e) => setInput({ ...input, date: e.target.value })}
            className="bg-black border border-white/10 p-2 rounded-md"
          />

          <select
            value={input.type}
            onChange={(e) => setInput({ ...input, type: e.target.value })}
            className="bg-black border border-white/10 p-2 rounded-md"
          >
            <option value={"income"}>Income</option>
            <option value={"expense"}>Expense</option>
          </select>

          <select
            value={input.category}
            onChange={(e) => setInput({ ...input, category: e.target.value })}
            className="bg-black border border-white/10 p-2 rounded-md"
          >
            <option>Salary</option>
            <option>Freelance</option>
            <option>Food</option>
            <option>Transport</option>
          </select>
        </div>

        <textarea
          placeholder="Note..."
          value={input.note}
          onChange={(e) => setInput({ ...input, note: e.target.value })}
          className="w-full mt-4 bg-black border border-white/10 p-2 rounded-md"
        />

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-white/10 rounded-md text-gray-300"
          >
            CANCEL
          </button>

          <button
            onClick={onSubmit}
            className="px-4 py-2 bg-emerald-400 text-black rounded-md font-medium hover:bg-emerald-500"
          >
            UPDATE
          </button>
        </div>
      </div>
    </div>
  );
};
export default EditModal;
