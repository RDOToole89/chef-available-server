"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          firstName: "Roibin",
          lastName: "O'Toole",
          userType: "Chef",
          email: "roibinotoole@gmail.com",
          password: bcrypt.hashSync("test", SALT_ROUNDS),
          businessName: "robster",
          dateOfBirth: "1989-05-03",
          address: "Jan Cupidohof 17hs",
          city: "Amsterdam",
          postalCode: "1064GS",
          isAdmin: true,
          isOnline: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Arjuna",
          lastName: "Munzer",
          userType: "Chef",
          email: "arjuna@gmail.com",
          password: bcrypt.hashSync("test", SALT_ROUNDS),
          businessName: "juna",
          dateOfBirth: "1991-02-13",
          address: "Uiterwaarde Straat 112",
          city: "Amsterdam",
          postalCode: "1078BH",
          isAdmin: true,
          isOnline: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Dave",
          lastName: "Rensmaag",
          userType: "Employer",
          email: "dave@gmail.com",
          password: bcrypt.hashSync("test", SALT_ROUNDS),
          businessName: "de koe",
          dateOfBirth: "1969-05-10",
          address: "Ijburgerlaan 213",
          city: "Amsterdam",
          postalCode: "1087KM",
          isAdmin: false,
          isOnline: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
