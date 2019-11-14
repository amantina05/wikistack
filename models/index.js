const Sequelize = require('sequelize');
// const db = new Sequelize('postgres://localhost:5432/wikistack');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
    logging: false
});


db.authenticate().
then(() => {
  console.log('connected to the database');
})

// const Page = db.define('page', {
//   title: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   slug: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   content: {
//     type: Sequelize.TEXT,
//     allowNull: false
//   },
//   status: {
//     type: Sequelize.ENUM('open', 'closed')
//   }
// });

// const User = db.define('user', {
//   name: {
//     type: Sequelize.STRING,
//     allowNull: false,
//     is: ["^[a-z]+$",'i']
//   },
//   email: {
//     type: Sequelize.STRING,
//     allowNull: false,
//     validate: {
//       isEMail: true
//   }
// });

const Page = db.define('page', {
  title: {
    type: Sequelize.STRING
  },
  slug: {
    type: Sequelize.STRING
  },
  content: {
    type: Sequelize.TEXT
  },
  status: {
    type: Sequelize.ENUM('open', 'closed')
  }
});

const User = db.define('user', {
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  }
});

module.exports = { Page, User, db };
