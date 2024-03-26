// authService
import axios from "axios";
const API_URL = "http://localhost:5000/api/users";

// Register user
const register = async (userData) => {
  // console.log(userData, "hhhh");
  const response = await axios.post(API_URL, userData);

  console.log(response);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

// login user
const login = async (userData) => {
  // console.log(userData, "hhhh");
  const response = await axios.post(API_URL + '/login', userData);

  console.log(response);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

// logout user
const logout = () => {
  localStorage.removeItem("user");
};
const authService = {
  register,
  logout,
  login,
};

export default authService;
