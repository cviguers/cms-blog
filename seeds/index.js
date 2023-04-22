const sequelize = require('../config/connection');
const seedBlogpost = require('./blogpostData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedBlogpost();

  process.exit(0);
};

seedAll();
