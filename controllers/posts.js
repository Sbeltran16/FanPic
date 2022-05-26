const Post = require('../models/post');
const S3 = require('aws-sdk/clients/s3');
const { v4: uuidv4 } = require('uuid');

const s3 = new S3();

module.exports = {
    create,
    // delete: deletePost,
    index
}

async function create(req, res){
    try{
        const filePath = `${uuidv4()}/${req.file.originalname}`
        const params = {Bucket: process.env.BUCKET_NAME, Key: filePath, Body: req.file.buffer};
        s3.upload(params, async function(err, data){
            const post = await Post.create({caption: req.body.caption, user: req.user, photoUrl: data.Location});

            await post.populate('user');
            res.status(201).json({post: post})
        })
    }catch(err){
        console.log(err)
        res.json({data: err})
    }
}

async function index(res, req){
    try {
        const posts = await Post.find({}).popluate('user').exec()
        res.status(200).json({posts})
    }catch(err){
        
    }
}

// function deletePost(req, res) {
//     // DELETE FIRST BY CHIRP ID
//     Post.findByIdAndDelete(req.params.id, function(err){
//         res.redirect('/')
//     })
// }