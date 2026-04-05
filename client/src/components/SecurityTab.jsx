const SecurityTab = () => {
  return (
    <div className="space-y-6">

      <div>
        <h2 className="text-lg font-semibold">Security</h2>
        <p className="text-gray-400 text-sm">
          Update your password
        </p>
      </div>

      <div className="space-y-4 max-w-xl">
        <input placeholder="Enter current password"
          className="w-full p-3 bg-black border border-white/10 rounded" />

        <input placeholder="Enter new password"
          className="w-full p-3 bg-black border border-white/10 rounded" />

        <input placeholder="Confirm new password"
          className="w-full p-3 bg-black border border-white/10 rounded" />
      </div>

      <div className="flex justify-end">
        <button className="bg-emerald-400 text-black px-6 py-2 rounded">
          UPDATE PASSWORD
        </button>
      </div>
    </div>
  );
};

export default SecurityTab;