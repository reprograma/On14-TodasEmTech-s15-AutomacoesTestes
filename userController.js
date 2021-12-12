const User = require('./UserModel');

const getAll = async(req, res) => {
    try {
        const users = await User.find()
        res.status(200).json({ messagem: "Lista de pessoas", users })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {
    getAll
}