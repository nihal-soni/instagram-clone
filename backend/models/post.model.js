import mongoose, { mongo } from "mongoose";
import { User } from "./user.model";

const postSchema = new mongoose.Schema({
    caption: {type: String, default: ''},
    image:{type: String, required: true},
    autthor: {type:mongoose.Schema.Types.ObjectId, ref: 'User'},
    likes:[{type:mongoose.Schema.Types.ObjectId, ref: 'User'}],
    comments:[{type:mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
})

export const Post = mongoose.model('Post', postSchema)