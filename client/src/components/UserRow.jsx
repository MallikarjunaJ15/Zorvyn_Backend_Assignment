import UserDropdown from "../components/UserDropdown.jsx";

const UserRow = ({ user, onRole, onStatus }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-6 gap-3 px-4 py-4 border-b border-white/5 items-center">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-white/10 rounded flex items-center justify-center text-xs">
          {user.name.slice(0, 2).toUpperCase()}
        </div>
        <span className="font-medium">{user.name}</span>
      </div>
      <div className="text-gray-400 hidden lg:block">{user.email}</div>
      <div>
        <span
          className={`px-3 py-1 rounded text-xs ${
            user.role === "ADMIN"
              ? "bg-emerald-400/20 text-emerald-400"
              : user.role === "ANALYST"
                ? "bg-purple-500/20 text-purple-400"
                : "bg-white/10 text-gray-300"
          }`}
        >
          {user.role}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <span
          className={`w-2 h-2 rounded-full ${
            user.status === "Active" ? "bg-green-400" : "bg-red-500"
          }`}
        />
        <span
          className={
            user.status === "Active" ? "text-green-400" : "text-red-400"
          }
        >
          {user.status}
        </span>
      </div>

      <div className="text-gray-400 hidden lg:block">{user.joined}</div>
      <div className="flex justify-end">
        <UserDropdown
          onRole={() => onRole(user)}
          onStatus={() => onStatus(user)}
        />
      </div>
    </div>
  );
};

export default UserRow;
