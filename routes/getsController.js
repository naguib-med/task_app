const express = require('express');
const router = express.Router();
const Task = require('../models/TaskSchema');
const {isValidObjectId} = require("mongoose");
const ObjetId = require('mongoose').Types.ObjectId;

router.get('/:id', (req, res) => {
    const _id = req.params.id;
    if(!isValidObjectId(_id)) return res.status(400).send('ID unknown : ' + _id);
    Task.findById(ObjetId(_id))
        .then(data => {
            if (!data) {
                res.status(404).send({ message: "Not found Task with id " + _id });
            } else {
                res.status(200).send(data);
            }
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error retrieving Task with id=" + id
            });
        });
});
router.get('/', (req, res) => {
    Task.find()
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tasks."
            });
        });
});

router.get('/:status', (req, res) => {
    const status = req.params.status;
    Task.find({ status: status })
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tasks."
            });
        });
});

router.get('/:status/:priority', (req, res) => {
    const status = req.params.status;
    const priority = req.params.priority;
    Task.find({ status: status, priority: priority })
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tasks."
            });
        });
});

// get by id



module.exports = router;

