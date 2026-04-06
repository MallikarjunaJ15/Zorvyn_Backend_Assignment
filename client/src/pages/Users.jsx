import { useState } from "react";
import UserTable from "../components/UserTable";
import RoleModal from "../components/RoleModal";
import ConfirmModal from "../components/ConfirmModal";
import { useGetAllUsersQuery } from "../redux/api/authApi";
const Users = () => {
  const { data: usersData } = useGetAllUsersQuery();

  const [selectedUser, setSelectedUser] = useState(null);
  const [roleModal, setRoleModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);

  const users = usersData || [];

  return (
    <div className="p-4 lg:p-6 space-y-6 text-white">
      <div>
        <p className="text-xs text-emerald-400 tracking-widest">
          ADMINISTRATION
        </p>
        <h1 className="text-3xl lg:text-4xl font-bold">User Management</h1>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-zinc-900 border border-white/10 rounded-xl p-4">
          <p className="text-xs text-gray-400">TOTAL USERS</p>
          <h2 className="text-2xl font-bold">{users.length}</h2>
        </div>
      </div>

      <UserTable
        users={users}
        onRole={(user) => {
          setSelectedUser(user);
          setRoleModal(true);
        }}
        onStatus={(user) => {
          setSelectedUser(user);
          setConfirmModal(true);
        }}
      />

      <RoleModal
        open={roleModal}
        user={selectedUser}
        onClose={() => setRoleModal(false)}
      />

      <ConfirmModal
        open={confirmModal}
        user={selectedUser}
        onClose={() => setConfirmModal(false)}
      />
    </div>
  );
};

export default Users;
