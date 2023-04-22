const { Blogpost } = require('../models');

const blogpostData = [
];

const seedBlogpost = () => Blogpost.bulkCreate(blogpostData);

module.exports = seedBlogpost;
