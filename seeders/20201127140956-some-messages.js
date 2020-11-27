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
          new: true,
          content:
            "Bacon ipsum dolor amet kevin shoulder t-bone, spare ribs meatloaf hamburger tail turkey buffalo tenderloin ham pork pig. Brisket cow venison chicken spare ribs landjaeger. Ribeye pork chop sausage doner, salami corned beef prosciutto swine spare ribs. Leberkas pork loin venison, picanha sausage salami swine rump turducken.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          recipientUserId: 1,
          title: "Booking for 27 December",
          new: true,
          content:
            "Bacon ipsum dolor amet kevin shoulder t-bone, spare ribs meatloaf hamburger tail turkey buffalo tenderloin ham pork pig. Brisket cow venison chicken spare ribs landjaeger. Ribeye pork chop sausage doner, salami corned beef prosciutto swine spare ribs. Leberkas pork loin venison, picanha sausage salami swine rump turducken.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          recipientUserId: 1,
          title: "Booking for 27 December",
          new: false,
          content:
            "Bacon ipsum dolor amet kevin shoulder t-bone, spare ribs meatloaf hamburger tail turkey buffalo tenderloin ham pork pig. Brisket cow venison chicken spare ribs landjaeger. Ribeye pork chop sausage doner, salami corned beef prosciutto swine spare ribs. Leberkas pork loin venison, picanha sausage salami swine rump turducken.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          recipientUserId: 1,
          new: false,
          title: "Booking for 5 December",
          content: "Bla bla bla",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          recipientUserId: 1,
          title: "Booking for 10 December",
          content:
            "Bacon ipsum dolor amet kevin shoulder t-bone, spare ribs meatloaf hamburger tail turkey buffalo tenderloin ham pork pig. Brisket cow venison chicken spare ribs landjaeger. Ribeye pork chop sausage doner, salami corned beef prosciutto swine spare ribs. Leberkas pork loin venison, picanha sausage salami swine rump turducken.",
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
