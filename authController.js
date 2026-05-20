const User = require("../models/User")

// REGISTER
exports.registerUser = async (req, res) => {

    try {

        res.json({
            success: true,
            message: "Register API Working"
        })

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

// LOGIN
exports.loginUser = async (req, res) => {

    try {

        res.json({
            success: true,
            message: "Login API Working"
        })

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}