import { useState } from "react";

const UserDropdown = ({ onRole, onStatus }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)}>⋮</button>
      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-zinc-900 border border-white/10 rounded-lg shadow-lg z-50">
          <p className="text-xs px-3 py-2 text-gray-400">
            MANAGE USER
          </p>

          <button
            onClick={() => {
              onRole();
              setOpen(false);
            }}
            className="w-full text-left px-3 py-2 hover:bg-emerald-400/10 text-emerald-400"
          >
            Change Role
          </button>

          <button
            onClick={() => {
              onStatus();
              setOpen(false);
            }}
            className="w-full text-left px-3 py-2 hover:bg-white/10"
          >
            Reactivate
          </button>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;