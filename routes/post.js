const router = require('express').Router();
let Post = require('../models/post');

router.route('/').get((request, response) => {
    Post.find()
        .then(Post => response.json(Post))
        .catch(error => response.status(400).json('Error: ' + error))
});

router.route('/create').post((request, response) => {
    const title = request.body.title;
    const description = request.body.description;

    const new_post = new Post({ title, description });

    new_post.save()
        .then(post => response.json('New Post Created'))
        .catch(error => response.status(400).json('Error: ' + error))
});

router.route('/update/:id').post((request, response) => {
    Post.findById((request.params.id))
        .then(post => {
            post.title = request.body.title;
            post.description = request.body.description;

            post.save()
                .then(() => response.json('Post Updated'))
                .catch(error => response.status(400).json('Error: ' + error))
        })
});

router.route('/:id').get((request, response) => {
    Post.findById(request.params.id)
        .then(post => response.json(post))
        .catch(error => response.status(400).json('Error: ' + error))
});

router.route('/:id').delete((request, response) => {
    Post.findByIdAndDelete(request.params.id)
        .then(post => response.json("Post Deleted"))
        .catch(error => response.status(400).json('Error: ' + error))
});


module.exports = router;