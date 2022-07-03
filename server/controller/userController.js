import { response } from "express";
import User from "../schema/userSchema.js";

export const addUser = async (req, res) => {
  const user = req.body;

  const newuser = new User(user);

  try {
    await newuser.save();
    res.status(201).json(newuser);
  } catch (e) {
    response.status(404).json({ message: e.message });
    console.log(e);
  }
};

export const getUsers = async (req, res) => {
  try {
    const allUsers = await User.find({});
    res.status(200).json(allUsers);
  } catch (e) {
    console.log(e);
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (e) {
    console.log(e);
  }
};

export const updateUser = async (req, res) => {
  let user = req.body;
  const editUser = new User(user);
  try {
    await User.updateOne({ _id: req.params.id }, editUser);
    res.status(201).json(editUser);
  } catch (e) {
    console.log(e);
  }
};

export const deleteUser = async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: "deleted" });
  } catch (e) {
    console.log(e);
  }
};
