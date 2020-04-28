const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    dateOfBirth: {
        type: Date,
        required: true
    }
},{
    timestamps: { currentTime: () => Math.floor(Date.now()) }
  })

  module.exports = mongoose.model("User", userSchema);