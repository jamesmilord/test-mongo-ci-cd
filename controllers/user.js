const users = require('../models/user')

module.exports = {
    async get(req, res) {
     try {
        const allUsers = await users.find()
        res.send(allUsers)
     } catch (error) {
         res.status(500).send
     }
    },

    async create(req, res) {
        try {
            const { firstName, lastName, dateOfBirth } = req.body
            if (!firstName) res.status(404).json({ message: 'mining firstName'})
            if (!lastName) res.status(404).json({ message: 'mining lastName'})
            if (!dateOfBirth) res.status(404).json({ message: 'mining dateOfBirth'})

            const user = await users.create({ firstName, lastName, dateOfBirth })
            res.send(user)
        } catch (error) {
            res.status(500).send(error)
        }
    }
}