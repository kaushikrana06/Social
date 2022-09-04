
const Post = require('../models/post')

exports.getIndex = (req,res) => {
    console.log('Requested at /')
    return res.json({
        "Message": "success"
    })
}

exports.getPost = async (req,res) => {
    const posts = await Post.find();
    res.json(posts)
}

exports.postPosts = async (req,res) =>{
    const {title, imageUrl, caption} = req.body;

    const post = new Post({
        title:title,
        caption:caption,
        imageUrl:imageUrl
    })

    await post.save();

    return res.json({
        "message": "Post Created"
    })
}