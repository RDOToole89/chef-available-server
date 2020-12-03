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
          tagName: "Chef de Partie",
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
        {
          tagName: "Wanker",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagName: "Tosser",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagName: "Olive Oil Enthusiast",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagName: "Pottymouth",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagName: "F***",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagName: "Idiot Sandwhich",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagName: "Salt Douche",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagName: "Steak",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagName: "Butcher",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagName: "Turkish",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagName: "Grill",
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
