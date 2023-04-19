const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const boardGameSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique:true
    },
    description:{
        type: String,
        required: true
    }
}, { timestamps: true });

const BoardGame = mongoose.model("BoardGame", boardGameSchema);

module.exports = BoardGame;