import { useState } from "react";
import UserTable from "../components/UserTable";
import RoleModal from "../components/RoleModal";
import ConfirmModal from "../components/ConfirmModal";

const Users = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [roleModal, setRoleModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  return (
    <div className="p-4 lg:p-6 space-y-6">
      <div>
        <p className="text-xs text-emerald-400 tracking-widest">
          ADMINISTRATION
        </p>
        <h1 className="text-3xl lg:text-4xl font-bold">User Management</h1>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "TOTAL USERS", value: "6" },
          { label: "ACTIVE", value: "4", color: "text-green-400" },
          { label: "ADMINS", value: "1", color: "text-emerald-400" },
          { label: "ANALYSTS", value: "2", color: "text-purple-400" },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-zinc-900 border border-white/10 rounded-xl p-4"
          >
            <p className="text-xs text-gray-400">{item.label}</p>
            <h2 className={`text-2xl font-bold ${item.color || ""}`}>
              {item.value}
            </h2>
          </div>
        ))}
      </div>
      <UserTable
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
        onClose={() => setConfirmModal(false)}
      />
    </div>
  );
};

export default Users;
