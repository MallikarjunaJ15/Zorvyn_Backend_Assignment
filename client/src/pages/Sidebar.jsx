import { NavLink, useNavigate } from "react-router-dom";
import { LayoutDashboard, Users, User, Wallet } from "lucide-react";
import { useLoginUserMutation } from "../redux/api/authApi";
import { useEffect } from "react";
import { logout } from "../redux/app/authSlice";
import { useSelector } from "react-redux";

const Sidebar = ({ mobileView, setMobileView }) => {
  const { user } = useSelector((store) => store.auth);
  const items = [
    { name: "Dashboard", path: "dashboard", icon: LayoutDashboard },
    { name: "Transactions", path: "transactions", icon: Wallet },
    { name: "Users", path: "users", icon: Users },
    { name: "Profile", path: "profile", icon: User },
  ];
  const navigate = useNavigate();
  const [logoutuser] = useLoginUserMutation();
  const handleLogout = async () => {
    await logoutuser();
    logout();
    navigate("/");
  };
  return (
    <>
      <div className="w-64 h-screen bg-linear-to-b from-black to-zinc-900 border-r border-white/10 flex flex-col justify-between backdrop-blur-xl">
        <div>
          <div className="p-6 text-xl font-bold flex gap-3 items-center">
            <span className="bg-emerald-400 text-black rounded-lg px-2 py-1 shadow-lg shadow-emerald-400/30">
              ⚡
            </span>
            <h1 className="text-emerald-400 tracking-wide">ZORVYN</h1>
          </div>

          <nav className="space-y-2 px-3 relative">
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 group ${
                      isActive ? "text-white" : "text-gray-400 hover:text-white"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span
                        className={`absolute left-0 top-0 h-full w-1 rounded-r bg-emerald-400 transition-all duration-300 ${
                          isActive ? "opacity-100" : "opacity-0"
                        }`}
                      />
                      <Icon
                        size={18}
                        className={`transition-all duration-300 ${
                          isActive
                            ? "text-emerald-400 scale-110"
                            : "group-hover:scale-110"
                        }`}
                      />
                      <span>{item.name}</span>
                      {isActive && (
                        <span className="absolute inset-0 bg-emerald-400/10 rounded-lg blur-md -z-10"></span>
                      )}
                    </>
                  )}
                </NavLink>
              );
            })}
          </nav>
        </div>
        <div className="p-4 text-sm text-gray-400 border-t border-white/10">
          <p>{user?.fullname?.firstname}</p>
          <p className="text-white font-semibold">{user.role}</p>

          <button 
            
            onClick={handleLogout}
            className="cursor-pointer mt-3 w-full py-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-all"
          >
            Logout
          </button>
        </div>
      </div>
      {mobileView && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileView(false)}
          ></div>

          <div className="relative w-64 h-full bg-linear-to-b from-black to-zinc-900 border-r border-white/10 animate-slideIn">
            <div className="flex justify-between items-center p-4 border-b border-white/10">
              <h1 className="text-emerald-400 font-bold">⚡ ZORVYN</h1>
              <X
                className="cursor-pointer"
                onClick={() => setMobileView(false)}
              />
            </div>

            <SidebarContent
              items={items}
              onClickItem={() => setMobileView(false)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
