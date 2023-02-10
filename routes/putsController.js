const express = require('express');
const router = express.Router();
const Task = require('../models/TaskSchema');
const {isValidObjectId} = require("mongoose");
const ObjetId = require('mongoose').Types.ObjectId;


router.put('/:id', (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }
    const _id = req.params.id;
    if(!isValidObjectId(_id)) return res.status(400).send('ID unknown : ' + _id);
    Task.findByIdAndUpdate(ObjetId(_id), req.body, {useFindAndModify: false})
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Task with id=${_id}. Maybe Task was not found!`
                });
            } else {
               // res.redirect('/api/tasks');
                res.status(204).send({
                    message: "Task was updated successfully!"
                });
            }
        }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Could not update Task with id=" + _id
        });
    });
});

module.exports = router;