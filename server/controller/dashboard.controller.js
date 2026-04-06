import {
  categoryWiseTotalService,
  getSummaryService,
  monthlyTrendsService,
  recentActivityService,
  weeklySummaryService,
} from "../services/dashboard.service.js";

export const summary = async (req, res) => {
  try {
    const data = await getSummaryService(req.user.userId);
    res.status(201).json(data);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const categoryWiseTotal = async (req, res) => {
  try {
    const data = await categoryWiseTotalService(req.user.userId);
    res.status(201).json(data);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const monthlyTrends = async (req, res) => {
  try {
    const data = await monthlyTrendsService(req.user.userId);
    res.status(201).json(data);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const recentActivity = async (req, res) => {
  try {
    const data = await recentActivityService(req.user.userId);
    res.status(201).json(data);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
export const weeklySummary = async (req, res) => {
  try {
    const data = await weeklySummaryService(req.user.userId);
    res.status(201).json(data);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
