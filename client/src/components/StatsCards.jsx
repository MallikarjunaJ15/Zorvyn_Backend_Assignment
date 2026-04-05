const StatsCards = () => {
  return (
    <div className="grid md:grid-cols-4 gap-4">
      {[
        { title: "RECORDS", value: "2" },
        { title: "INCOME", value: "$4,200", color: "text-emerald-400" },
        { title: "EXPENSES", value: "$0", color: "text-red-500" },
        { title: "NET", value: "$4,200", color: "text-green-400" },
      ].map((item, i) => (
        <div
          key={i}
          className="bg-zinc-900 border border-white/10 p-4 rounded-xl"
        >
          <p className="text-xs text-gray-400">{item.title}</p>
          <h2 className={`text-2xl font-bold ${item.color}`}>
            {item.value}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;