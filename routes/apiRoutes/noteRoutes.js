const router = require('express').Router();
const { tasks } = require("../../db/db.json");
const { findById, removeTasks, createNewTasks } = require("../../lib/tasks");
const uuid = require('uuid');


//Get notes from array
router.get('/tasks', (req, res) => {
    res.json(tasks);
});

//Get notes and send error
router.get('/tasks/:id', (req, res) => {
    const result = findById(req.params.id, tasks);
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
});

//Create a note and give a unique ID
router.post("/tasks", (req, res) => {
    req.body.id = uuid.v3();
    const tasks = createNewTasks(req.body, tasks);
    res.json(tasks);
})

//remove notes by ID
router.delete('/tasks/:id', (req, res) => {
    const note = findById(req.params.id, tasks);
    removeTasks(task, tasks);
    res.json();
});

module.exports = router;