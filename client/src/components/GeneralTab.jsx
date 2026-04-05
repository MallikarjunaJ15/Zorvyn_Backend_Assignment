const GeneralTab = () => {
  return (
    <div className="space-y-6">

      <div>
        <h2 className="text-lg font-semibold">
          Personal Information
        </h2>
        <p className="text-gray-400 text-sm">
          Update your profile details
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        <div>
          <label className="text-xs text-gray-400">FIRST NAME</label>
          <input className="w-full mt-1 p-3 bg-black border border-white/10 rounded" defaultValue="Kael" />
        </div>

        <div>
          <label className="text-xs text-gray-400">LAST NAME</label>
          <input className="w-full mt-1 p-3 bg-black border border-white/10 rounded" defaultValue="Zorvyn" />
        </div>
      </div>

      <div>
        <label className="text-xs text-gray-400">EMAIL ADDRESS</label>
        <input className="w-full mt-1 p-3 bg-black border border-white/10 rounded" defaultValue="admin@zorvyn.io" />
      </div>

      <div className="flex justify-end">
        <button className="bg-emerald-400 text-black px-6 py-2 rounded font-medium">
          SAVE CHANGES
        </button>
      </div>
    </div>
  );
};

export default GeneralTab;