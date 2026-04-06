import { useState } from "react";
import { useUpdateUserRoleMutation } from "../redux/api/authApi";

const RoleModal = ({ open, onClose, user }) => {
  const [role, setRole] = useState(user?.role || "viewer");
  const [updateRole] = useUpdateUserRoleMutation();

  if (!open) return null;

  const handleUpdate = async () => {
    await updateRole({ id: user._id, role });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
      <div className="bg-zinc-900 p-6 rounded-xl w-[400px]">

        <h2 className="mb-4">Update Role</h2>

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full p-2 bg-black mb-4"
        >
          <option value="admin">admin</option>
          <option value="analyst">analyst</option>
          <option value="viewer">viewer</option>
        </select>

        <div className="flex justify-end gap-3">
          <button onClick={onClose}>Cancel</button>
          <button onClick={handleUpdate} className="bg-emerald-400 px-4 py-2">
            Update
          </button>
        </div>

      </div>
    </div>
  );
};

export default RoleModal;