import Transaction from "../model/transaction.schema.js";
export const getSummaryService = async (userId) => {
  const result = await Transaction.aggregate([
    {
      $match: {
        user: userId,
        isDeleted: false,
      },
    },
    {
      $group: {
        _id: null,

        totalIncome: {
          $sum: {
            $cond: [{ $eq: ["$type", "income"] }, "$amount", 0],
          },
        },

        totalExpense: {
          $sum: {
            $cond: [{ $eq: ["$type", "expense"] }, "$amount", 0],
          },
        },
      },
    },
  ]);

  const summary = result[0] || { totalIncome: 0, totalExpense: 0 };

  return {
    totalIncome: summary.totalIncome,
    totalExpense: summary.totalExpense,
    netBalance: summary.totalIncome - summary.totalExpense,
  };
};

export const categoryWiseTotalService = async (userId) => {
  return await Transaction.aggregate([
    {
      $match: {
        user: userId,
        isDeleted: false,
      },
    },
    {
      $group: {
        _id: "$category",
        total: { $sum: "$amount" },
      },
    },
    {
      $sort: { total: -1 },
    },
  ]);
};
export const monthlyTrendsService = async (userId) => {
  return await Transaction.aggregate([
    {
      $match: {
        user: userId,
        isDeleted: false,
      },
    },
    {
      $group: {
        _id: {
          month: { $month: "$date" },
          year: { $year: "$date" },
        },
        income: {
          $sum: {
            $cond: [{ $eq: ["$type", "income"] }, "$amount", 0],
          },
        },
        expense: {
          $sum: {
            $cond: [{ $eq: ["$type", "expense"] }, "$amount", 0],
          },
        },
      },
    },
    {
      $sort: { "_id.year": 1, "_id.month": 1 },
    },
  ]);
};

export const recentActivityService = async (userId) => {
  return await Transaction.find({
    user: userId,
    isDeleted: false,
  })
    .sort({ createdAt: -1 })
    .limit(10);
};

export const weeklySummaryService = async (userId) => {
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  return await Transaction.aggregate([
    {
      $match: {
        user: userId,
        isDeleted: false,
        date: { $gte: sevenDaysAgo },
      },
    },
    {
      $group: {
        _id: {
          day: { $dayOfMonth: "$date" },
          month: { $month: "$date" },
        },
        total: { $sum: "$amount" },
      },
    },
    {
      $sort: {
        "_id.month": 1,
        "_id.day": 1,
      },
    },
  ]);
};
