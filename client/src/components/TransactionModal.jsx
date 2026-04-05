const TransactionModal = ({ onClose }) => {
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
              placeholder="Amount"
              className="flex-1 bg-black border border-emerald-400 px-3 py-2 rounded"
            />
            <input
              type="date"
              className="flex-1 bg-black border border-white/10 px-3 py-2 rounded"
            />
          </div>

          <div className="flex gap-4">
            <select className="flex-1 bg-black border border-white/10 p-2 rounded">
              <option>Expense</option>
              <option>Income</option>
            </select>

            <select className="flex-1 bg-black border border-white/10 p-2 rounded">
              <option>Other</option>
            </select>
          </div>

          <textarea
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

            <button className="px-4 py-2 bg-emerald-400 text-black rounded font-semibold">
              CREATE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionModal;
