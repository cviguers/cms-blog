const { Blogpost } = require('../models');

const blogpostdata = [

  {
    title: 'Fire and Ice by Robert Frost',
    content: 'Some say the world will end in fire, Some say in ice. From what Ive tasted of desire I hold with those who favor fire. But if it had to perish twice...',
  },

  {
    title: 'Hope by Emily Dickinson',
    content:'HOPE is the thing with feathers That perches in the soul, And sings the tune without the words, And never stops at all, And sweetest in the gale is heard...',
  },

  {
    title: 'Do Not Stand at My Grave and Weep by Mary Elizabeth Frye',
    content: 'Do not stand at my grave and weep: I am not there; I do not sleep. I am a thousand winds that blow, I am the diamond glints on snow, I am the sun on ripened grain...',
  },
];

const seedBlogpost = () => Blogpost.bulkCreate(blogpostdata);

module.exports = seedBlogpost;
