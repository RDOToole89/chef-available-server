"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "userTags",
      [
        {
          userId: 1,
          specializationTagId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          specializationTagId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          specializationTagId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          specializationTagId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          specializationTagId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          specializationTagId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          specializationTagId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          specializationTagId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          specializationTagId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          specializationTagId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("userTags", null, {});
  },
};
