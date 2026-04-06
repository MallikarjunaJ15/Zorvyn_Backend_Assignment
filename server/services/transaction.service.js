import Transaction from "../model/transaction.schema.js";

export const createTransactionService = async (userId, data) => {
  const { amount, type, category, note, date } = data;
  // console.log("data coming",data)
  if (!amount || !type || !category || !date) {
    throw new Error("All fields required");
  }
  return await Transaction.create({
    user: userId,
    amount,
    type,
    category,
    note,
    date,
  });
};

export const getAllTransactionService = async (userId, query) => {
  const {
    page = 1,
    limit = 10,
    type,
    category,
    startDate,
    endDate,
    sort = "-date",
    search,
  } = query;

  const filter = {
    user: userId,
    isDeleted: false,
  };
  if (type) {
    filter.type = type;
  }
  if (category) {
    filter.category = category;
  }
  if (startDate || endDate) {
    filter.date = {};
    if (startDate) {
      filter.date.$gte = new Date(startDate);
    }
    if (endDate) {
      filter.date.$lte = new Date(endDate);
    }
  }
  if (search) {
    filter.note = { $regex: search, $options: "i" };
  }

  const skip = (page - 1) * limit;
  const transactions = await Transaction.find(filter)
    .sort(sort)
    .skip(skip)
    .limit(parseInt(limit));

  const total = await Transaction.countDocuments(filter);
  return {
    total,
    page: parseInt(page),
    pages: Math.ceil(total / limit),
    transactions,
  };
};

export const getTransactionByIdService = async (id) => {
  const tran = await Transaction.findById(id);

  if (!tran) throw new Error("Transaction not found");

  return tran;
};

export const updateTransactionService = async (id, data) => {
  const tran = await Transaction.findByIdAndUpdate(id, data, { new: true });
  if (!tran) throw new Error("Transaction not found");
  return tran;
};
export const deleteTransactionService = async (id) => {
  const tran = await Transaction.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );
  if (!tran) {
    throw new Error("Transaction not found");
  }
  return { message: "Record deleteed successfully" };
};
