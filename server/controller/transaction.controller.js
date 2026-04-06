import {
  createTransactionService,
  deleteTransactionService,
  getAllTransactionService,
  getTransactionByIdService,
  updateTransactionService,
} from "../services/transaction.service.js";

export const createTransaction = async (req, res) => {
  try {
    // console.log("Body", req.body);
    const userId = req.user.userId;
    const data = await createTransactionService(userId, req.body);
    return res.status(201).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getAllTransaction = async (req, res) => {
  try {
    const data = await getAllTransactionService(req.user.userId, req.query);
    return res.status(201).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const getTransactionById = async (req, res) => {
  try {
    const { transactionId } = req.params;
    const data = await getTransactionByIdService(transactionId);
    return res.status(201).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateTransaction = async (req,res) => {
  try {
    const { transactionId } = req.params;
    const data = await updateTransactionService(transactionId, req.body);
    return res.status(201).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteTransaction = async (req, res) => {
  try {
    const { transactionId } = req.params;
    const data = await deleteTransactionService(transactionId);
    return res.status(201).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
