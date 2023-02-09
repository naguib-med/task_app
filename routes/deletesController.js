const express = require('express');
const router = express.Router();
const Task = require('../models/TaskSchema');

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Task.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Task with id=${id}. Maybe Task was not found!`
                });
            } else {
                res.status(204).send({
                    message: "Task was deleted successfully!"
                });
            }
        }).catch(err => {
            res.status(500).send({
                message:
                err.message || "Could not delete Task with id=" + id
            });
        });
});

router.delete('/', (req, res) => {
    Task.deleteMany({})
        .then(data => {
            res.status(204).send({
                message: `${data.deletedCount} Tasks were deleted successfully!`
            });
        }) .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all tasks."
            });
        });
});

module.exports = router;
