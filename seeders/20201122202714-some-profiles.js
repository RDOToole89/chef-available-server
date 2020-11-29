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
          imgUrl:
            "https://media.gq-magazine.co.uk/photos/5d13a8ad003d754254ae74f1/master/pass/adam-handling-gq-17apr19_b.jpg",
          position: "Head Chef",
          hourlyRate: 34.5,
          yearsOfExperience: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          description:
            "Chef Arjuna Munzer is a passionate chef with over 14 years of experience cooking in various restaurants in Amsterdam. He specializes in French / Mediterranean cuisine and is available for work in a 20km radius around Amsterdam. ",
          imgUrl: "https://www.earnmydegree.com/sites/all/files/public/images/become-chef.jpg",
          position: "Sous Chef",
          hourlyRate: 38.5,
          yearsOfExperience: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          description:
            "Chef Gavin Roy is a passionate chef with over 14 years of experience cooking in various restaurants in Amsterdam. He specializes in French / Mediterranean cuisine and is available for work in a 20km radius around Amsterdam. ",
          imgUrl: "https://artzycafe.com/wp-content/uploads/2020/05/Vocations-in-Cooking.jpg",
          position: "Sous Chef",
          hourlyRate: 138.5,
          yearsOfExperience: 20,
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
