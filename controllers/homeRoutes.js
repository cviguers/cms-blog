const router = require('express').Router();
const { Blogpost } = require('../models');

// GET all blogposts for homepage
router.get('/', async (req, res) => {
  try {
    const dbBlogpostData = await Blogpost.findAll();

    const blogposts = dbBlogpostData.map((blogpost) =>
      blogpost.get({ plain: true })
    );

    res.render('homepage', {
      blogposts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET response for dashboard page
router.get('/dashboard', async (req, res) => {
  try {
    const dbBlogpostData = await Blogpost.findAll();

    const blogposts = dbBlogpostData.map((blogpost) =>
      blogpost.get({ plain: true })
    );

    res.render('dashboard', {
      blogposts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one blogpost
router.get('/dashboard/:id', async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    // If the user is logged in, allow them to view the blogpost
    try {
      const dbBlogpostData = await Blogpost.findByPk(req.params.id);
      const blogpost = dbBlogpostData.get({ plain: true });
      res.render('addpost', { blogpost, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

// GET one blogpost
router.get('/blogpost/:id', async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    // If the user is logged in, allow them to view the blogpost
    try {
      const dbBlogpostData = await Blogpost.findByPk(req.params.id);
      const blogpost = dbBlogpostData.get({ plain: true });
      res.render('blogpost', { blogpost, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
