const router = require('express').Router();
const { Blogpost } = require('../../models');
// Import the custom middleware
const withAuth = require('../../utils/auth');

// /api/posts

// read entire blogpost table
router.get('/', async (req, res) => {
  try {
    // call sequelize to find all posts and store variables
    const postData = await Blogpost.findAll();
    // return data in json
    res.status(200).json(postData);
    // if err throw err
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

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

// update posts in blogpost table
router.put('/:id', async (req, res) => {
  try {
    // call sequelize to update based upon what is in the product body
    const postData = await Blogpost.update(
      {
        title: req.body.title,
        content: req.body.content,
      },
      // update based on post id in the params
      {
        where: {
          id: req.params.id,
        },
      }
    );
    // return created product in json
    res.status(200).json(postData);
    // if err throw err
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// delete post based on id
router.delete('/:id', withAuth, async (req, res) => {
  try {
    // call sequelize to delete based on the params id
    const postData = await Blogpost.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    // return confirmation that row was deleted
    res.status(200).json(postData);
    // if err throw err
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;
