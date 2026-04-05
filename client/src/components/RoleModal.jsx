const RoleModal = ({ open, onClose, user }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-zinc-900 border border-white/10 rounded-xl w-[400px] p-6">
        <h2 className="text-lg font-semibold mb-2">Update Role</h2>

        <p className="text-gray-400 mb-4">Change role for {user?.name}</p>

        <select className="w-full bg-black border border-white/10 p-2 rounded mb-6">
          <option>admin</option>
          <option>analyst</option>
          <option>viewer</option>
        </select>

        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="border px-4 py-2 rounded">
            CANCEL
          </button>

          <button className="bg-emerald-400 text-black px-4 py-2 rounded">
            UPDATE ROLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoleModal;
