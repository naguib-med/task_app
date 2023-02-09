const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: '',
    },
    status: {
        type: String,
        enum: ['pending', 'in progress', 'completed'],
        default: 'pending',
    },
    dueDate: {
        type: Date,
        default: null
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    versionKey: false,
});

module.exports = mongoose.model('Task', taskSchema, 'tasks');