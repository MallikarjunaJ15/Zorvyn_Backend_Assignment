const ConfirmModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-zinc-900 border border-white/10 rounded-xl w-[400px] p-6">
        <h2 className="text-lg font-semibold mb-2">Confirm Action</h2>

        <p className="text-gray-400 mb-6">
          This will reactivate the user account.
        </p>

        <div className="flex justify-end gap-3">
          <button onClick={ onClose} className="border px-4 py-2 rounded">
            CANCEL
          </button>

          <button className="bg-red-500 px-4 py-2 rounded">CONFIRM</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
