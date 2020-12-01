"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "messages",
      [
        {
          userId: 2,
          recipientUserId: 1,
          title: "Booking for 03 December",
          new: true,
          content:
            "Bacon ipsum dolor amet kevin shoulder t-bone, spare ribs meatloaf hamburger tail turkey buffalo tenderloin ham pork pig. Brisket cow venison chicken spare ribs landjaeger. Ribeye pork chop sausage doner, salami corned beef prosciutto swine spare ribs. Leberkas pork loin venison, picanha sausage salami swine rump turducken.",
          date: new Date("2020-12-03"),
          createdAt: new Date("2020-11-02"),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          recipientUserId: 1,
          title: "Booking for 12 December",
          new: true,
          content:
            "Bacon ipsum dolor amet kevin shoulder t-bone, spare ribs meatloaf hamburger tail turkey buffalo tenderloin ham pork pig. Brisket cow venison chicken spare ribs landjaeger. Ribeye pork chop sausage doner, salami corned beef prosciutto swine spare ribs. Leberkas pork loin venison, picanha sausage salami swine rump turducken.",
          date: new Date("2020-12-12"),
          createdAt: new Date("2020-11-06"),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          recipientUserId: 1,
          title: "Booking for 14 December",
          new: false,
          content:
            "Bacon ipsum dolor amet kevin shoulder t-bone, spare ribs meatloaf hamburger tail turkey buffalo tenderloin ham pork pig. Brisket cow venison chicken spare ribs landjaeger. Ribeye pork chop sausage doner, salami corned beef prosciutto swine spare ribs. Leberkas pork loin venison, picanha sausage salami swine rump turducken.",
          date: new Date("2020-12-14"),
          createdAt: new Date("2020-11-22"),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          recipientUserId: 1,
          new: false,
          title: "Booking for 19 December",
          content:
            "Bacon ipsum dolor amet kevin shoulder t-bone, spare ribs meatloaf hamburger tail turkey buffalo tenderloin ham pork pig. Brisket cow venison chicken spare ribs landjaeger. Ribeye pork chop sausage doner, salami corned beef prosciutto swine spare ribs. Leberkas pork loin venison, picanha sausage salami swine rump turducken.",
          date: new Date("2020-12-19"),
          createdAt: new Date("2020-11-26"),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          new: false,
          recipientUserId: 1,
          title: "Booking for 26 December",
          content:
            "Bacon ipsum dolor amet kevin shoulder t-bone, spare ribs meatloaf hamburger tail turkey buffalo tenderloin ham pork pig. Brisket cow venison chicken spare ribs landjaeger. Ribeye pork chop sausage doner, salami corned beef prosciutto swine spare ribs. Leberkas pork loin venison, picanha sausage salami swine rump turducken.",
          date: new Date("2020-12-26"),
          createdAt: new Date("2020-11-28"),
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
