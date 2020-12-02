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
          yearsOfExperience: 120,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          description: "Dave succesful guitar player and business owner.",
          imgUrl: "",
          position: "Restaurant owner",
          hourlyRate: 138.5,
          yearsOfExperience: 120,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          description:
            "Jamie Oliver, (born May 27, 1975, Clavering, Essex, England), British chef who achieved worldwide fame with his television shows The Naked Chef (1999) and Jamie Oliver’s Food Revolution (2010–11) and as author of a number of cookbooks with a variety of culinary themes.",
          imgUrl:
            "https://res.cloudinary.com/dqrgx8g71/image/upload/v1606921607/dev_setups/ftnydipfpmsqqtd8hbbe.webp",
          position: "Total wanker",
          hourlyRate: 12000.39,
          yearsOfExperience: 30,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 6,
          description:
            "Gordon James Ramsay OBE (born 8 November 1966) is a British chef, restaurateur, writer, and television personality. He was born in Johnstone, Scotland, and raised in Stratford-upon-Avon, England. His restaurants have been awarded 16 Michelin stars in total and currently hold a total of seven.",
          imgUrl:
            "https://cdn1.i-scmp.com/sites/default/files/styles/1200x800/public/images/methode/2018/11/09/4189f666-e0cb-11e8-829d-1199cf0acfc4_1280x720_104300.JPG?itok=P1lTqIH3",
          position: "None of your fucking business",
          hourlyRate: 30001.21,
          yearsOfExperience: 120,
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
