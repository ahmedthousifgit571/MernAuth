const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");
const User = require("../models/userModel");
// @desc Get goal
//@route get /api/goals
//@access Private
const getGoals = asyncHandler(async (req, res) => {
  console.log(req.body);
  const goals = await Goal.find({ user: req.user.id });
  res.status(200).json(goals);
});

// @desc set goal
//@route POST /api/goals
//@access Private
const postGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("please add a text field");
  }
  const goals = await Goal.create({
    text: req.body.text,
    user: req.user.id,
  });
  res.status(200).json(goals);
});

// @desc  update goal
//@route Put /api/goals
//@access Private
const putGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.findById(req.params.id);

  if (!goals) {
    res.status(400);
    throw new Error("goal not found");
  }

  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }
  if (goals.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("user not authorized");
  }
  const updatedGoals = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedGoals);
});

// @desc delete goal
//@route delete /api/goals
//@access Private
const deleteGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.findById(req.params.id);
  if (!goals) {
    res.status(400);
    throw new Error("goal not found");
  }
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }
  if (goals.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("user not authorized");
  }
  await goals.deleteOne({ id: req.params.id });
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getGoals,
  postGoals,
  putGoals,
  deleteGoals,
};
