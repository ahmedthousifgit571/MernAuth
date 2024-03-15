// @desc Get goal
//@route get /api/goals
//@access Private
const getGoals = (req, res) => {
  if (!req.body.text) {
    res.status(400).json({ message: "please add a text"});
  }
  console.log(req.body);
  res.status(200).json({ message: "get goals" });
};

// @desc set goal
//@route POST /api/goals
//@access Private
const postGoals = (req, res) => {
  res.status(200).json({ message: "set goals" });
};

// @desc  update goal
//@route Put /api/goals
//@access Private
const putGoals = (req, res) => {
  res.status(200).json({ message: `update goals: ${req.params.id}` });
};

// @desc delete goal
//@route delete /api/goals
//@access Private
const deleteGoals = (req, res) => {
  res.status(200).json({ message: `delete goals : ${req.params.id}` });
};

module.exports = {
  getGoals,
  postGoals,
  putGoals,
  deleteGoals,
};
