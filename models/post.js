const {Schema, model} = require('mongoose')

const postSchema = new Schema({
    title:{
        type:String,
        required:true    
    },
    imageUrl:{
        type:String,
        required:true
    },
    caption:{
        type:String,
        required:true
    },
    likeCount:{
        type:Number,
        default:0
    }
},
{ timestamps: true })

module.exports = model("Post",postSchema)