import Card from "./Card";

const StatsCards = ({ data }) => {
  return (
    <div className="grid md:grid-cols-4 gap-4">
      <Card
        title="TOTAL INCOME"
        value={data?.totalIncome}
        positive
      />
      <Card title="EXPENSE" value={data?.totalExpense} change="-3%" />
      <Card title="BALANCE" value={data?.netBalance} change="+8%" positive />
    </div>
  );
};

export default StatsCards;
