// components/AuthCard.jsx
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const AuthCard = ({ input, setInput, onSubmit }) => {
  const [mode, setMode] = useState("login");
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "firstname" || name === "lastname") {
      setInput({
        ...input,
        fullname: {
          ...input.fullname,
          [name]: value,
        },
      });
    } else {
      setInput({
        ...input,
        [name]: value,
      });
    }
  };
  return (
    <div className="max-w-md mx-auto bg-black border border-white/10 p-6 lg:p-8 text-white">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-emerald-400 flex items-center justify-center text-black font-bold rounded-lg">
          ⚡
        </div>
        <div>
          <h1 className="font-bold text-lg text-emerald-400">ZORVYN</h1>
          <p className="text-xs text-gray-400">FINANCE CONTROL</p>
        </div>
      </div>

      <div className="flex border border-white/10 mb-6">
        <button
          onClick={() => setMode("login")}
          className={`flex-1 py-2 text-sm tracking-widest ${
            mode === "login"
              ? "bg-emerald-400/10 text-emerald-400 border-b-2 border-emerald-400"
              : "text-gray-500"
          }`}
        >
          SIGN IN
        </button>

        <button
          onClick={() => setMode("register")}
          className={`flex-1 py-2 text-sm tracking-widest ${
            mode === "register"
              ? "bg-emerald-400/10 text-emerald-400 border-b-2 border-emerald-400"
              : "text-gray-500"
          }`}
        >
          REGISTER
        </button>
      </div>

      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(mode, input);
        }}
      >
        {mode === "register" && (
          <div className="grid grid-cols-2 gap-3">
            <input
              name="firstname"
              value={input.firstname}
              onChange={handleChange}
              placeholder="First name"
              className="p-3 bg-black border border-emerald-800 text-sm rounded-lg placeholder:text-gray-600"
            />
            <input
              name="lastname"
              value={input.lastname}
              onChange={handleChange}
              placeholder="Last name"
              className="p-3 bg-black border border-emerald-800 text-sm rounded-lg placeholder:text-gray-600"
            />
          </div>
        )}

        <div>
          <label className="text-xs text-gray-400">EMAIL</label>
          <input
            type="email"
            name="email"
            value={input.email}
            onChange={handleChange}
            placeholder="admin@zorvyn.io"
            className="w-full mt-1 p-3 bg-black border border-white/10"
          />
        </div>
        <div className="relative">
          <label className="text-xs text-gray-400">PASSWORD</label>

          <input
            type={show ? "text" : "password"}
            name="password"
            value={input.password}
            onChange={handleChange}
            placeholder="Enter password"
            className="w-full mt-1 p-3 bg-black border border-white/10 pr-10"
          />

          <div
            onClick={() => setShow(!show)}
            className="absolute right-3 top-9.5 cursor-pointer text-gray-400"
          >
            {show ? <EyeOff size={18} /> : <Eye size={18} />}
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-emerald-400 text-black py-3 mt-2 font-semibold tracking-wide"
        >
          {mode === "login" ? "ACCESS DASHBOARD" : "CREATE ACCOUNT"}
        </button>
        <p className="text-center text-xs text-gray-500 mt-4">
          {mode === "login" ? (
            <>
              NO ACCOUNT YET?{" "}
              <span
                onClick={() => setMode("register")}
                className="text-emerald-400 cursor-pointer"
              >
                Register
              </span>
            </>
          ) : (
            <>
              ALREADY HAVE ACCESS?{" "}
              <span
                onClick={() => setMode("login")}
                className="text-emerald-400 cursor-pointer"
              >
                Sign In
              </span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default AuthCard;
