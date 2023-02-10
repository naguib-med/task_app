const express = require('express');
const router = express.Router();
const Task = require('../models/TaskSchema');
const {isValidObjectId} = require("mongoose");
const ObjetId = require('mongoose').Types.ObjectId;


router.delete('/delete/:id', (req, res) => {
    const _id = req.params.id;
    if(!isValidObjectId(_id)) return res.status(400).send('ID unknown : ' + _id);
    Task.findByIdAndRemove(ObjetId(_id))
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Task with id=${_id}. Maybe Task was not found!`
                });
            } else {
               // res.redirect('/api/tasks');
                res.status(204).send({
                    message: "Task was deleted successfully!"
                });
            }
        }).catch(err => {
            res.status(500).send({
                message:
                err.message || "Could not delete Task with id=" + _id
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
