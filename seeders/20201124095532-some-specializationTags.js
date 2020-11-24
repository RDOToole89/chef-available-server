"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "specializationTags",
      [
        {
          tagName: "Michelin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagName: "British",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagName: "Dutch",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagName: "French",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagName: "Mediterranean",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagName: "Personal Chef",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagName: "Italian",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagName: "Pizza",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagName: "Dishwash Master",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagName: "Head Chef",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagName: "Chef de Parti",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagName: "Sous Chef",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagName: "Mexican",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagName: "BBQ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("specializationTags", null, {});
  },
};
