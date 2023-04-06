const { StatusCodes } = require("http-status-codes")

/**@type {import("express").RequestHandler } */
const handleNotfound = async (req, res) => {
    return res.status(StatusCodes.NOT_FOUND).json({ message: "Route not found" })
}

module.exports = handleNotfound
