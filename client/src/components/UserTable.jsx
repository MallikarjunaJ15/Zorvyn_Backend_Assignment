import UserRow from "./UserRow";

const users = [
  {
    name: "Kael Zorvyn",
    email: "admin@zorvyn.io",
    role: "ADMIN",
    status: "Inactive",
    joined: "Aug 15, 24",
  },
  {
    name: "Nyx Varen",
    email: "nyx.varen@data.co",
    role: "ANALYST",
    status: "Active",
    joined: "Sep 2, 24",
  },
];

const UserTable = ({ onRole, onStatus }) => {
  return (
    <div className="bg-zinc-900 border border-white/10 rounded-xl overflow-visible">
      <div className="hidden lg:grid grid-cols-6 text-xs text-gray-400 px-4 py-3 border-b border-white/10">
        <span>USER</span>
        <span>EMAIL</span>
        <span>ROLE</span>
        <span>STATUS</span>
        <span>JOINED</span>
        <span className="text-center">ACTIONS</span>
      </div>

      {users.map((user, i) => (
        <UserRow key={i} user={user} onRole={onRole} onStatus={onStatus} />
      ))}
    </div>
  );
};

export default UserTable;
