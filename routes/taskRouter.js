const express = require("express");

const router = express.Router();

const {
  getAllTask,
  createTask,
  getEachTask,
  deleteTask,
  updateTask,
} = require("../controllers/taskController");

router.get("/", getAllTask);

router.post("/create", createTask);

router.get("/:id", getEachTask);

router.delete("/:id", deleteTask);

router.patch("/:id", updateTask);


module.exports = router;
