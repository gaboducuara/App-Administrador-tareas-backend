const express = require('express');
const {
  createTask,
  getTasks,
  getTasksById,
  DeleteTask,
  updateTask,
} = require('../controller/taskController.js');
const router = express.Router();
const Task = require('../model/taskModel.js');

router.route('/').get(getTasks).post(createTask),
router.route('/:id').get(getTasksById).put(updateTask).delete(DeleteTask)

// crear tareas API  ---- > creo una nueva tarea
// router.post('/', createTask);
//Get, leet datos --- > traigo los datos para leerlos
// router.get('/', getTask);
// tareas por Id
// router.get('/:id', getTasksById);
// router.patch('/:id', UpdateTask);
// router.delete('/:id', DeleteTask);

module.exports = router;
