import {
  categoryWiseTotalService,
  getSummaryService,
  monthlyTrendsService,
  recentActivityService,
} from "../services/dashboard.service.js";

export const summary = async (req, res) => {
  try {
    const data = await getSummaryService();
    res.status(201).json(data);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const categoryWiseTotal = async (req, res) => {
  try {
    const data = await categoryWiseTotalService();
    res.status(201).json(data);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const monthlyTrends = async () => {
  try {
    const data = await monthlyTrendsService();
    res.status(201).json(data);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const recentActivity = async (req, res) => {
  try {
    const data = await recentActivityService();
    res.status(201).json(data);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
export const weeklySummary = async (req, res) => {
  try {
    const data = await weeklySummaryService();
    res.status(201).json(data);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
