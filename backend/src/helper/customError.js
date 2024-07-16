"use strict"

// Miras alma işlemi
class CustomError extends Error {

    name = 'CustomError'
    constructor(message, statusCode, cause) {
        super(message)
        this.statusCode = statusCode
        this.cause = cause
    }
}

module.exports = CustomError