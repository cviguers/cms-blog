const { Blogpost } = require('../models');

const blogpostdata = [

  {
    title: 'Winter Home',
    content: 'Log cabin blanketed in heavy white snow with tall snow covered pine trees in the background.',
  },
];

const seedBlogpost = () => Blogpost.bulkCreate(blogpostdata);

module.exports = seedBlogpost;
