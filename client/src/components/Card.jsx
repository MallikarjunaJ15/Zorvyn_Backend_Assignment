import { motion } from "framer-motion";

const Card = ({ title, value, change, positive, icon }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="relative bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-5 overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />

      <div className="flex justify-between items-center">
        <div className="p-3 bg-black/40 rounded-xl border border-white/10">
          {icon}
        </div>

        <span
          className={`text-sm font-medium ${
            positive ? "text-emerald-400" : "text-red-500"
          }`}
        >
          {change}
        </span>
      </div>

      <div className="mt-6">
        <p className="text-xs text-gray-400 tracking-widest">
          {title}
        </p>

        <h2 className="text-3xl font-bold mt-2 tracking-tight">
          {value}
        </h2>
      </div>
    </motion.div>
  );
};

export default Card;