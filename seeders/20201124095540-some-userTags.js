"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "userTags",
      [
        {
          profileId: 1,
          specializationTagId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 2,
          specializationTagId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 1,
          specializationTagId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 2,
          specializationTagId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 1,
          specializationTagId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 2,
          specializationTagId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 1,
          specializationTagId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 2,
          specializationTagId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 1,
          specializationTagId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 2,
          specializationTagId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 1,
          specializationTagId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 2,
          specializationTagId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 2,
          specializationTagId: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 1,
          specializationTagId: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 2,
          specializationTagId: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          profileId: 3,
          specializationTagId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 3,
          specializationTagId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 3,
          specializationTagId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 3,
          specializationTagId: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: 3,
          specializationTagId: 14,
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
