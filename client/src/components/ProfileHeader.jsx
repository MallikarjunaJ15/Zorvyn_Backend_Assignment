const ProfileHeader = () => {
  return (
    <div className="bg-zinc-900 border border-white/10 rounded-xl p-6 flex flex-col lg:flex-row items-start lg:items-center gap-6">

      {/* AVATAR */}
      <div className="w-20 h-20 bg-emerald-400/20 text-emerald-400 flex items-center justify-center text-2xl font-bold rounded">
        KZ
      </div>

      {/* INFO */}
      <div className="flex-1">
        <h2 className="text-xl font-semibold">Kael Zorvyn</h2>
        <p className="text-gray-400 text-sm">admin@zorvyn.io</p>

        <div className="flex items-center gap-3 mt-2 flex-wrap">
          <span className="px-3 py-1 bg-emerald-400/10 text-emerald-400 text-xs rounded">
            🛡 ADMINISTRATOR
          </span>
          <span className="text-xs text-gray-500">
            Joined August 2024
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;