"use strict"

const { connect } = require('mongoose')

module.exports = async () => {
    connect(process.env.MONGODB || 'mongodb://localhost:27017/TodoAPI')
}