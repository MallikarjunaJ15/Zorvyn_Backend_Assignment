import Card from "../components/Card";
import TrendChart from "../components/TrendChart";
import PieChartComp from "../components/PieChartComp";
import RecentActivity from "../components/RecentActivity";
import WeeklySummary from "../components/WeeklySummary";

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6 bg-black min-h-screen text-white">
      <div>
        <p className="text-emerald-400 text-xs tracking-widest">CONTROL ROOM</p>
        <h1 className="text-4xl font-bold">Dashboard</h1>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <Card title="TOTAL INCOME" value="$20,900" change="+12%" positive />
        <Card title="EXPENSE" value="$8,154" change="-3%" />
        <Card title="BALANCE" value="$12,746" change="+8%" positive />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <TrendChart />
        <PieChartComp />
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <RecentActivity />
        <WeeklySummary />
      </div>
    </div>
  );
};

export default Dashboard;
