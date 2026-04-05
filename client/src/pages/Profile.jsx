import { useState } from "react";
import ProfileHeader from "../components/ProfileHeader";
import ProfileTabs from "../components/ProfileTabs";
import GeneralTab from "../components/GeneralTab";
import SecurityTab from "../components/SecurityTab";
import NotificationTab from "../components/NotificationTab";

const Profile = () => {
  const [tab, setTab] = useState("general");

  return (
    <div className="p-4 lg:p-6 space-y-6">
      <div>
        <p className="text-xs text-emerald-400 tracking-widest">ACCOUNT</p>
        <h1 className="text-3xl lg:text-4xl font-bold">
          Profile & Settings
        </h1>
      </div>

      <ProfileHeader />
      <ProfileTabs tab={tab} setTab={setTab} />
      <div className="bg-zinc-900 border border-white/10 rounded-xl p-6">
        {tab === "general" && <GeneralTab />}
        {tab === "security" && <SecurityTab />}
        {tab === "notifications" && <NotificationTab />}
      </div>
    </div>
  );
};

export default Profile;