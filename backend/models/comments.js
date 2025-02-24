import mongoose, { mongo } from "mongoose";

const commentSchema =new mongoose.Schema({
    postId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Posts",
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    comment:{
        type:String,
        required:true
    },
},
{
    timestamps:true
})

const CommentModel =mongoose.model('comments',commentSchema)

export default CommentModel