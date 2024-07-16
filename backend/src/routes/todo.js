"use strict"

const router = require('express').Router()
const todo = require('../controllers/todo')

router.route('/', todo.list)  