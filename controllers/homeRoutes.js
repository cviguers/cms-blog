const router = require('express').Router();
const { User, Blogpost } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET response for homepage handlebars
router.get('/', async (req, res) => {
  try {
    // render homepage handlebar if logged in
    res.render('home', {
    });
    // if err, throw err
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});