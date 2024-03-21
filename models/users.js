const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    username: String,
    nickname: String,
    description: String,
    categories: {
        type: Array,
        default: [],
    },
    datecreated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('users', userSchema);