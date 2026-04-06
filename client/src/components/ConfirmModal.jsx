import { useDeleteUserMutation } from "../redux/api/authApi";

const ConfirmModal = ({ open, onClose, user }) => {
  const [deleteUser] = useDeleteUserMutation();

  if (!open) return null;

  const handleDelete = async () => {
    await deleteUser(user._id);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
      <div className="bg-zinc-900 p-6 rounded-xl w-[400px]">

        <h2 className="mb-4">Deactivate User</h2>

        <p className="mb-6">Are you sure?</p>

        <div className="flex justify-end gap-3">
          <button onClick={onClose}>Cancel</button>
          <button
            onClick={handleDelete}
            className="bg-red-500 px-4 py-2"
          >
            Confirm
          </button>
        </div>

      </div>
    </div>
  );
};

export default ConfirmModal;