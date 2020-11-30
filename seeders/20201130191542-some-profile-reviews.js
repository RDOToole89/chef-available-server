"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "profileReviews",
      [
        {
          title: "Awesome chef! A+",
          content: "Just wow totally amazeballs!",
          reviewScore: 5,
          userId: 3,
          profileId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Good chef! B+",
          content: "Wowzers this chef makes a great piece of toast!",
          reviewScore: 4,
          userId: 2,
          profileId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "MEH! chef! C+",
          content: "Food tasted like cardboard, better than my regular chef though.",
          reviewScore: 3,
          userId: 4,
          profileId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Terrible chef! D-",
          content: "He served the fish still alive.",
          reviewScore: 2,
          userId: 4,
          profileId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Horrible chef! F-",
          content: "Food tasted like actual dog crap.",
          reviewScore: 1,
          userId: 3,
          profileId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("profileReviews", null, {});
  },
};
