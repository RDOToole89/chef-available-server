"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "availableDates",
      [
        {
          profileId: 1,
          date: "2020-12-03",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 1,
          date: "2020-12-05",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 1,
          date: "2020-12-06",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 1,
          date: "2020-12-07",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 1,
          date: "2020-12-10",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 1,
          date: "2020-12-12",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 1,
          date: "2020-12-15",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 1,
          date: "2020-12-17",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 1,
          date: "2020-12-20",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 1,
          date: "2020-12-21",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 1,
          date: "2020-12-23",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 1,
          date: "2020-12-24",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 1,
          date: "2020-12-26",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 1,
          date: "2020-12-28",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 1,
          date: "2020-12-30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 2,
          date: "2020-12-02",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 2,
          date: "2020-12-08",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 3,
          date: "2020-12-10",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 2,
          date: "2020-12-09",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 2,
          date: "2020-12-12",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 2,
          date: "2020-12-15",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 2,
          date: "2020-12-17",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 2,
          date: "2020-12-23",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 2,
          date: "2020-12-24",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 2,
          date: "2020-12-27",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 2,
          date: "2020-12-30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 2,
          date: "2020-12-31",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 2,
          date: "2020-01-01",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 2,
          date: "2020-01-02",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 2,
          date: "2020-01-06",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 3,
          date: "2020-12-02",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 3,
          date: "2020-12-06",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 3,
          date: "2020-12-08",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 3,
          date: "2020-12-09",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 3,
          date: "2020-12-11",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 3,
          date: "2020-12-15",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 3,
          date: "2020-12-17",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 3,
          date: "2020-12-20",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 3,
          date: "2020-12-22",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 3,
          date: "2020-12-24",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 3,
          date: "2020-12-26",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 3,
          date: "2020-12-30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 3,
          date: "2020-12-31",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 3,
          date: "2020-01-02",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 2,
          date: "2020-01-06",
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
