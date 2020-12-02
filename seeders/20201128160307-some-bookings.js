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
          date: new Date("2020-12-03"),
          createdAt: new Date("2020-11-02"),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          profileId: 1,
          messageId: 2,
          accepted: false,
          date: new Date("2020-12-08"),
          createdAt: new Date("2020-11-07"),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          profileId: 1,
          messageId: 3,
          accepted: false,
          date: new Date("2020-12-14"),
          createdAt: new Date("2020-12-01"),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          profileId: 1,
          messageId: 3,
          accepted: false,
          date: new Date("2020-12-12"),
          createdAt: new Date("2020-12-01"),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          profileId: 1,
          messageId: 4,
          accepted: false,
          date: new Date("2020-12-19"),
          createdAt: new Date("2020-11-04"),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          profileId: 1,
          messageId: 5,
          accepted: true,
          date: new Date("2020-12-26"),
          createdAt: new Date("2020-12-06"),
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
