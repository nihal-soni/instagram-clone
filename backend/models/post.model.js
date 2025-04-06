import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    caption: {type: String, default: ''},
    image:{type: String, required: true},
    autthor: {type:mongoose.Schema.Types.ObjectId, ref: 'User'}
})