import { User, Lock, Bell } from "lucide-react";

const ProfileTabs = ({ tab, setTab }) => {
  const tabs = [
    { key: "general", label: "GENERAL", icon: User },
    { key: "security", label: "SECURITY", icon: Lock },
    { key: "notifications", label: "NOTIFICATIONS", icon: Bell },
  ];

  return (
    <div className="flex gap-2 bg-zinc-900 border border-white/10 rounded-lg p-1 w-fit">

      {tabs.map((t) => {
        const Icon = t.icon;

        return (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`flex items-center gap-2 px-4 py-2 text-sm rounded-md transition ${
              tab === t.key
                ? "bg-emerald-400/10 text-emerald-400"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <Icon size={16} />
            {t.label}
          </button>
        );
      })}
    </div>
  );
};

export default ProfileTabs;