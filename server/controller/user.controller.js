import {
  registerUser,
  loginUser,
  getUserByIdService,
  updateUserRoleService,
  deleteUserService,
  getAllUsersService,
  getMeService,
} from "../services/auth.service.js";
export const register = async (req, res) => {
  try {
    // console.log(req.body);
    const data = await registerUser(req.body);
    res
      .cookie("token", data.token, {
        httpOnly: true,
        secure: true,
        sameSite: "None",
      })
      .status(200)
      .json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const data = await loginUser(req.body);
    res
      .cookie("token", data.token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .status(200)
      .json(data);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

export const logout = async (req, res) => {
  try {
    res
      .clearCookie("token", {
        httpOnly: true,
        sameSite: "lax",
        secure: false, 
      })
      .status(200)
      .json({ message: "Logged out successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getAllUsers = async (req, res) => {
  try {
    const data = await getAllUsersService();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const { userId } = req.params;
    const data = await getUserByIdService(userId);
    res.status(200).json(data);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

export const updateRole = async (req, res) => {
  try {
    const { userId } = req.params;
    const { role } = req.body;
    const data = await updateUserRoleService(userId, role);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const data = await deleteUserService(userId);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getMe = async (req, res) => {
  try {
    const data = await getMeService(req.user.userId);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
