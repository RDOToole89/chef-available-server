"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "bookings",
      [
        {
          userId: 2,
          profileId: 1,
          messageId: 1,
          accepted: false,
          date: new Date("2020-11-29"),
          createdAt: new Date("2020-11-29"),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          profileId: 1,
          messageId: 2,
          accepted: false,
          date: new Date("2020-12-03"),
          createdAt: new Date("2020-12-03"),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          profileId: 1,
          messageId: 3,
          accepted: false,
          date: new Date("2020-12-10"),
          createdAt: new Date("2020-12-10"),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          profileId: 1,
          messageId: 4,
          accepted: false,
          date: new Date("2020-12-14"),
          createdAt: new Date("2020-12-14"),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          profileId: 1,
          messageId: 5,
          accepted: true,
          date: new Date("2020-12-18"),
          createdAt: new Date("2020-12-18"),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("bookings", null, {});
  },
};
