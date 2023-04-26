const router = require('express').Router();
const { Blogpost } = require('../../models');

// CREATE new post
router.post('/', async (req, res) => {
    try {
      const postData = await Blogpost.create({
        title: req.body.title,
        content: req.body.content,
      });
      res.status(200).json(postData);
    } catch (err) {
      res.status(400).json(err);
    }
});

module.exports = router;
