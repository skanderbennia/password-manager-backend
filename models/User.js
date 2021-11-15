const mongoose = require("mongoose")


const userSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,

    },
    password: {
        type: String,
        required: true
    },
    status: {
        type: Boolean

    },

})
const User = mongoose.model("users", userSchema)

module.exports = User