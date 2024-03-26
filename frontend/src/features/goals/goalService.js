import axios from "axios";
const API_URL = "http://localhost:5000/api/users/goals";

// create new goal
const createGoal = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, goalData, config);
};

// get user goal
const getGoals = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL, config);
};

const goalService = {
  createGoal,
  getGoals
};

export default goalService;
