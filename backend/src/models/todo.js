"use strict"

const {Schema, model} = require('mongoose')

const todoSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: true,
        minlength: 3,
        maxlenght: 200
    },
    description: {
        type: String,
        trim: true,
        required: true,
        minlength: 3,
        maxlenght: 200
    },
    priority: {
        type: String,
        enum: {
            values: ['low', 'medium', 'high'], 
            message: 'Invalid priority value'
        },
        default: 'medium'
    },
    isDone: {
        type: Boolean,
        default: false
    }
}, 
{   
    collection: 'todos',
    timestamps: true
})

// Model names supposed to be written in PascalCase
module.exports = model('Todo', todoSchema)
