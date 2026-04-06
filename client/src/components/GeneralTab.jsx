const GeneralTab = ({ user }) => {
  if (!user) return null;

  return (
    <div className="space-y-6">

      <div>
        <h3 className="text-lg font-semibold mb-4">Personal Information</h3>

        <div className="grid md:grid-cols-2 gap-4">

          <div>
            <p className="text-xs text-gray-400">First Name</p>
            <div className="bg-black border border-white/10 p-2 rounded">
              {user.fullname?.firstname}
            </div>
          </div>

          <div>
            <p className="text-xs text-gray-400">Last Name</p>
            <div className="bg-black border border-white/10 p-2 rounded">
              {user.fullname?.lastname || "-"}
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="text-xs text-gray-400">Email</p>
            <div className="bg-black border border-white/10 p-2 rounded">
              {user.email}
            </div>
          </div>

          <div>
            <p className="text-xs text-gray-400">Role</p>
            <div className="bg-black border border-white/10 p-2 rounded capitalize">
              {user.role}
            </div>
          </div>

          <div>
            <p className="text-xs text-gray-400">Status</p>
            <div className="bg-black border border-white/10 p-2 rounded">
              {user.isActive ? "Active" : "Inactive"}
            </div>
          </div>

        </div>
      </div>

      {/* STATIC NOTE */}
      <p className="text-xs text-gray-500">
        Editing profile is disabled in this version.
      </p>
    </div>
  );
};

export default GeneralTab;