const { Blogpost } = require('../models');

const blogpostdata = [

  {
    title: 'Fire and Ice by Robert Frost',
    content: 'Some say the world will end in fire, Some say in ice. From what Ive tasted of desire I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate To know that for destruction ice Is also great, And would suffice.',
  },

  {
    title: 'Hope by Emily Dickinson',
    content:'HOPE is the thing with feathers That perches in the soul, And sings the tune without the words, And never stops at all, And sweetest in the gale is heard; And sore must be the storm That could abash the little bird That kept so many warm. I’ve heard it in the chillest land, And on the strangest sea; Yet, never, in extremity, It asked a crumb of me.',
  },

  {
    title: 'Do Not Stand at My Grave and Weep by Mary Elizabeth Frye',
    content: 'Do not stand at my grave and weep: I am not there; I do not sleep. I am a thousand winds that blow, I am the diamond glints on snow, I am the sun on ripened grain, I am the gentle autumn rain. When you awaken in the morning’s hush I am the swift uplifting rush Of quiet birds in circling flight. I am the soft starshine at night. Do not stand at my grave and cry: I am not there; I did not die.',
  },
];

const seedBlogpost = () => Blogpost.bulkCreate(blogpostdata);

module.exports = seedBlogpost;
