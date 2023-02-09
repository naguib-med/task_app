const express = require('express');
const router = express.Router();
const Task = require('../models/TaskSchema');

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

router.get('/:id', (req, res) => {
    const id = req.params.id;
    Task.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Task with id " + id });
            else res.status(200).send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error retrieving Task with id=" + id
            })
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

module.exports = router;

