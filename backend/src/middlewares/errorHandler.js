"use strict"

module.exports = (err, req, res, next) => {
    
    const statusCode = res.statusCode ?? 500
    console.error(err)

    res.status(statusCode).send({
        error: true,
        message: err.message,
        cause: err.cause
    })
}