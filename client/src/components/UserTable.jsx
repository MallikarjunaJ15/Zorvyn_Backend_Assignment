import UserRow from "./UserRow";

const UserTable = ({ users, onRole, onStatus }) => {
  return (
    <div className="bg-zinc-900 border border-white/10 rounded-xl">
      <div className="hidden lg:grid grid-cols-6 text-xs text-gray-400 px-4 py-3 border-b border-white/10">
        <span>USER</span>
        <span>EMAIL</span>
        <span>ROLE</span>
        <span>STATUS</span>
        <span>JOINED</span>
        <span className="text-center">ACTIONS</span>
      </div>

      {users.map((user) => (
        <UserRow
          key={user._id}
          user={user}
          onRole={onRole}
          onStatus={onStatus}
        />
      ))}
    </div>
  );
};

export default UserTable;
