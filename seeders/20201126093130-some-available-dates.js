"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "availableDates",
      [
        {
          profileId: 1,
          date: "2020-11-03",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 1,
          date: "2020-11-05",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 1,
          date: "2020-11-06",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 1,
          date: "2020-11-07",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 1,
          date: "2020-11-10",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 1,
          date: "2020-11-12",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 1,
          date: "2020-11-15",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 1,
          date: "2020-11-17",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 1,
          date: "2020-11-20",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 1,
          date: "2020-11-21",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 1,
          date: "2020-11-23",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 1,
          date: "2020-11-24",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 1,
          date: "2020-11-26",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 1,
          date: "2020-11-28",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 1,
          date: "2020-11-30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("availableDates", null, {});
  },
};
