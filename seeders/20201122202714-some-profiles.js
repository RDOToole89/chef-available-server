"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "profiles",
      [
        {
          userId: 1,
          description:
            "Chef Roibin O'Toole is a passionate chef with over 14 years of experience cooking in various restaurants in Amsterdam. He specializes in French / Mediterranean cuisine and is available for work in a 20km radius around Amsterdam. ",
          imgUrl: "https://artzycafe.com/wp-content/uploads/2020/05/Vocations-in-Cooking.jpg",
          hourlyRate: 34.5,
          yearsOfExperience: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          description:
            "Chef Arjuna Munzer is a passionate chef with over 14 years of experience cooking in various restaurants in Amsterdam. He specializes in French / Mediterranean cuisine and is available for work in a 20km radius around Amsterdam. ",
          imgUrl: "https://www.earnmydegree.com/sites/all/files/public/images/become-chef.jpg",
          hourlyRate: 38.5,
          yearsOfExperience: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("profiles", null, {});
  },
};
