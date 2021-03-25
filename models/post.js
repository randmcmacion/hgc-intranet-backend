const mongoose = require ('mongoose' );

const Schema = mongoose.Schema;

const post_schema = new Schema({
    
    title: {
        type: String,
        required:true,
        trim:true
    },
 
    description: {
        type: String,
        required:true,
        trim:true
    }

}, {
    timestamps:true
});

const Post = mongoose.model('posts', post_schema);

module.exports = Post;