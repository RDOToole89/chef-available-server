"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "messages",
      [
        {
          userId: 2,
          recipientUserId: 1,
          title: "Booking for 12 December",
          content: "Bla bla bla",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          recipientUserId: 1,
          title: "Booking for 27 December",
          content: "Bla bla bla",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("messages", null, {});
  },
};
