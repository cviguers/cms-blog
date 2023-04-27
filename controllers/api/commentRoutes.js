const router = require('express').Router();
const { Blogpost } = require('../../models');

// /api/comments

// CREATE new comment
router.post('/', async (req, res) => {
    try {
      const commentData = await Blogpost.create({
        comments: req.body.comments,
      });
      res.status(200).json(commentData);
    } catch (err) {
      res.status(400).json(err);
    }
});

module.exports = router;