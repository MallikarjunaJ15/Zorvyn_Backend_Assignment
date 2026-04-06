import { Pencil, Trash2 } from "lucide-react";

const UserRow = ({ user, onRole, onStatus }) => {
  return (
    <div className="grid grid-cols-6 px-4 py-3 border-b border-white/10 text-sm items-center">
      <span>{user.fullname?.firstname}</span>
      <span>{user.email}</span>
      <span className="capitalize">{user.role}</span>
      <span className={user.isActive ? "text-green-400" : "text-red-400"}>
        {user.isActive ? "Active" : "Inactive"}
      </span>
      <span>{new Date(user.createdAt).toLocaleDateString()}</span>

      <div className="flex gap-3 justify-center">
        <Pencil
          onClick={() => onRole(user)}
          size={16}
          className="cursor-pointer"
        />
        <Trash2
          onClick={() => onStatus(user)}
          size={16}
          className="cursor-pointer text-red-400"
        />
      </div>
    </div>
  );
};

export default UserRow;
