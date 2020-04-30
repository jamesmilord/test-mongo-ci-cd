const uuid = require('uuid')
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

            const user = await users.create({ _id: uuid.v4(), firstName, lastName, dateOfBirth })
            res.send(user)
        } catch (error) {
            res.status(500).send(error)
        }
    },

    async update(req, res) {
        try {
            const { data, id } = req.body
            if (!data) res.status(404).json({ message: 'mining data'})
            if (!id) res.status(404).json({ message: 'mining id'})

            const updated = await users.findByIdAndUpdate(id, data, {new: true})
            res.send(updated)
        } catch (error) {
            res.status(500).send(error)
        }
    },

    async delete(req, res) {
        try {
            const { id } = req.body
            if (!id) res.status(404).json({ message: 'mining id'})
            
            await users.findByIdAndDelete(id)
            res.json({success: true})
        } catch (error) {
            res.status(500).send(error)
        }
    }
}