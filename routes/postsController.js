const express = require('express');
const router = express.Router();
const Task = require('../models/TaskSchema');

router.post('/', (req, res) => {
    const task = new Task({
        name: req.body.name,
        description: req.body.description,
        status: req.body.status,
        priority: req.body.priority,
        dueDate: req.body.dueDate,
    });

    task.save()
        .then(data => {
            //res.redirect('/api/tasks');
            res.status(201).send(data);
        }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the Task."
        });
    });
});

module.exports = router;