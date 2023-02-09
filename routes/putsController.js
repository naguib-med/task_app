const express = require('express');
const router = express.Router();
const Task = require('../models/TaskSchema');

router.put('/:id', (req, res) => {
    const id = req.params.id;
    Task.findByIdAndUpdate(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Task with id=${id}. Maybe Task was not found!`
                });
            } else {
                res.status(204).send({
                    message: "Task was updated successfully!"
                });
            }
        }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Could not update Task with id=" + id
        });
    });
});

module.exports = router;