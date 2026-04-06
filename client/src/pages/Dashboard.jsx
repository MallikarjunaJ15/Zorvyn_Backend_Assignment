import Card from "../components/Card";
import TrendChart from "../components/TrendChart";
import PieChartComp from "../components/PieChartComp";
import RecentActivity from "../components/RecentActivity";
import WeeklySummary from "../components/WeeklySummary";
import {
  useGetCategoryWiseQuery,
  useGetMonthlyTrendsQuery,
  useGetRecentActivityQuery,
  useGetSummaryQuery,
  useGetWeeklySummaryQuery,
} from "../redux/api/dashboardApi";

const Dashboard = () => {
  const { data } = useGetSummaryQuery();
  const { data: monthData } = useGetMonthlyTrendsQuery();
  const { data: categoryData } = useGetCategoryWiseQuery();
  const { data: weeklySummary } = useGetWeeklySummaryQuery();
  const { data: recentActivityData } = useGetRecentActivityQuery();
  const formatMonthData = (monthData) => {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return monthData?.map((item) => ({
      name: monthNames[item._id.month - 1],
      income: item.income,
      expense: item.expense,
    }));
  };
  const formattedData = formatMonthData(monthData);
  const formatCategoryData = (data) => {
    const colors = [
      "#34d399",
      "#f43f5e",
      "#60a5fa",
      "#facc15",
      "#a78bfa",
      "#fb923c",
      "#22c55e",
      "#e879f9",
    ];

    return (
      data?.map((item, index) => ({
        name: item._id,
        value: item.total,
        fill: colors[index % colors.length],
      })) || []
    );
  };
  const formattedCategory = formatCategoryData(categoryData);

  const formatWeeklyData = (data) => {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    return (
      data?.map((item) => ({
        name: `${monthNames[item._id.month - 1]} ${item._id.day}`,
        value: item.total,
      })) || []
    );
  };

  const formattedWeekly = formatWeeklyData(weeklySummary);
  return (
    <div className="p-6 space-y-6 bg-black min-h-screen text-white">
      <div>
        <p className="text-emerald-400 text-xs tracking-widest">CONTROL ROOM</p>
        <h1 className="text-4xl font-bold">Dashboard</h1>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <Card
          title="TOTAL INCOME"
          value={data?.totalIncome}
          change={parseInt(data?.totalIncome % data?.totalExpense)}
          positive
        />
        <Card title="EXPENSE" value={data?.totalExpense} change="-3%" />
        <Card title="BALANCE" value={data?.netBalance} change="+8%" positive />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <TrendChart data={formattedData} />
        <PieChartComp data={formattedCategory} />
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <RecentActivity data={recentActivityData}/>
        <WeeklySummary data={formattedWeekly} />
      </div>
    </div>
  );
};

export default Dashboard;
