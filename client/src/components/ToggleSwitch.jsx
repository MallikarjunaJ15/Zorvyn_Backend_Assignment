const ToggleSwitch = ({ enabled, setEnabled }) => {
  return (
    <div
      onClick={() => setEnabled(!enabled)}
      className={`w-10 h-5 flex items-center rounded-full p-1 cursor-pointer transition ${
        enabled ? "bg-emerald-400" : "bg-zinc-700"
      }`}
    >
      <div
        className={`w-4 h-4 bg-black rounded-full transition ${
          enabled ? "translate-x-5" : ""
        }`}
      />
    </div>
  );
};

export default ToggleSwitch;