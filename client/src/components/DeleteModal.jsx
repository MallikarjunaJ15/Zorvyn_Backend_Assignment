const DeleteModal = ({ open, onClose, onConfirm }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-zinc-900 border border-white/10 rounded-xl w-[400px] p-6">
        
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Confirm Delete</h2>
          <button onClick={onClose}>✕</button>
        </div>

        <p className="text-gray-400 mb-6">
          This will soft-delete the transaction. Are you sure?
        </p>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-white/10 rounded-md text-gray-300 hover:bg-white/10"
          >
            CANCEL
          </button>

          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
};
export default DeleteModal;