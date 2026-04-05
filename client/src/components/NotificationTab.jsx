import { useState } from "react";
import ToggleSwitch from "./ToggleSwitch";
import { Mail, Bell, Calendar, AlertCircle } from "lucide-react";

const NotificationTab = () => {
  const [email, setEmail] = useState(true);
  const [push, setPush] = useState(false);
  const [weekly, setWeekly] = useState(true);
  const [budget, setBudget] = useState(true);

  const items = [
    {
      label: "Email Notifications",
      desc: "Receive transaction alerts via email",
      icon: Mail,
      state: email,
      setState: setEmail,
    },
    {
      label: "Push Notifications",
      desc: "Browser push notifications",
      icon: Bell,
      state: push,
      setState: setPush,
    },
    {
      label: "Weekly Reports",
      desc: "Summary of weekly activity",
      icon: Calendar,
      state: weekly,
      setState: setWeekly,
    },
    {
      label: "Budget Alerts",
      desc: "Spending exceeds threshold",
      icon: AlertCircle,
      state: budget,
      setState: setBudget,
    },
  ];

  return (
    <div className="space-y-6">

      <div>
        <h2 className="text-lg font-semibold">Notifications</h2>
        <p className="text-gray-400 text-sm">
          Configure your preferences
        </p>
      </div>

      {items.map((item, i) => {
        const Icon = item.icon;

        return (
          <div
            key={i}
            className="flex items-center justify-between border-b border-white/10 py-4"
          >
            <div className="flex items-center gap-4">
              <Icon className="text-gray-400" size={18} />

              <div>
                <p className="font-medium">{item.label}</p>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            </div>

            <ToggleSwitch
              enabled={item.state}
              setEnabled={item.setState}
            />
          </div>
        );
      })}
    </div>
  );
};

export default NotificationTab;