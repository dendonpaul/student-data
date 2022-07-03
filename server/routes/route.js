import express from "express";
import {
  addUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} from "../controller/userController.js";

const router = express.Router();

router.post("/add", addUser);
router.get("/all", getUsers);
router.get("/user/:id", getUser);
router.post("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
