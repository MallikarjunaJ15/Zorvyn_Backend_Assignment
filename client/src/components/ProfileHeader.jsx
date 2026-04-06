const ProfileHeader = ({ user }) => {
  if (!user) return null;

  const initials = user.fullname?.firstname?.[0]?.toUpperCase() || "U";

  return (
    <div className="bg-zinc-900 border border-white/10 rounded-xl p-6 flex flex-col lg:flex-row items-start lg:items-center gap-6">
      {/* AVATAR */}
      <div className="w-20 h-20 bg-emerald-400/20 text-emerald-400 flex items-center justify-center text-2xl font-bold rounded">
        {initials}
      </div>

      {/* INFO */}
      <div className="flex-1">
        <h2 className="text-xl font-semibold">
          {user.fullname?.firstname} {user.fullname?.lastname}
        </h2>

        <p className="text-gray-400 text-sm">{user.email}</p>

        <div className="flex items-center gap-3 mt-2 flex-wrap">
          <span className="px-3 py-1 bg-emerald-400/10 text-emerald-400 text-xs rounded">
            {user.role.toUpperCase()}
          </span>

          <span className="text-xs text-gray-500">
            Joined {new Date(user.createdAt).toLocaleDateString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
