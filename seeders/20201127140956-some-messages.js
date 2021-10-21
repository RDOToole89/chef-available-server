'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'messages',
      [
        {
          userId: 2,
          recipientUserId: 1,
          title: 'Booking for 24 Oktober',
          new: true,
          content:
            'Bacon ipsum dolor amet kevin shoulder t-bone, spare ribs meatloaf hamburger tail turkey buffalo tenderloin ham pork pig. Brisket cow venison chicken spare ribs landjaeger. Ribeye pork chop sausage doner, salami corned beef prosciutto swine spare ribs. Leberkas pork loin venison, picanha sausage salami swine rump turducken.',
          date: new Date('2021-10-24'),
          createdAt: new Date('2021-09-02'),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          recipientUserId: 1,
          title: 'Booking for 30 Oktober',
          new: true,
          content:
            'Bacon ipsum dolor amet kevin shoulder t-bone, spare ribs meatloaf hamburger tail turkey buffalo tenderloin ham pork pig. Brisket cow venison chicken spare ribs landjaeger. Ribeye pork chop sausage doner, salami corned beef prosciutto swine spare ribs. Leberkas pork loin venison, picanha sausage salami swine rump turducken.',
          date: new Date('2021-10-30'),
          createdAt: new Date('2021-10-06'),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          recipientUserId: 1,
          title: 'Booking for 8 november',
          new: false,
          content:
            'Bacon ipsum dolor amet kevin shoulder t-bone, spare ribs meatloaf hamburger tail turkey buffalo tenderloin ham pork pig. Brisket cow venison chicken spare ribs landjaeger. Ribeye pork chop sausage doner, salami corned beef prosciutto swine spare ribs. Leberkas pork loin venison, picanha sausage salami swine rump turducken.',
          date: new Date('2021-11-08'),
          createdAt: new Date('2021-09-22'),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          recipientUserId: 1,
          new: true,
          title: 'Booking for 11 November',
          content:
            'Bacon ipsum dolor amet kevin shoulder t-bone, spare ribs meatloaf hamburger tail turkey buffalo tenderloin ham pork pig. Brisket cow venison chicken spare ribs landjaeger. Ribeye pork chop sausage doner, salami corned beef prosciutto swine spare ribs. Leberkas pork loin venison, picanha sausage salami swine rump turducken.',
          date: new Date('2021-11-11'),
          createdAt: new Date('2021-09-26'),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          new: true,
          recipientUserId: 1,
          title: 'Booking for 16 Novemeber',
          content:
            'Bacon ipsum dolor amet kevin shoulder t-bone, spare ribs meatloaf hamburger tail turkey buffalo tenderloin ham pork pig. Brisket cow venison chicken spare ribs landjaeger. Ribeye pork chop sausage doner, salami corned beef prosciutto swine spare ribs. Leberkas pork loin venison, picanha sausage salami swine rump turducken.',
          date: new Date('2021-11-16'),
          createdAt: new Date('2021-09-28'),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          new: true,
          recipientUserId: 1,
          title: 'Booking for 23 November',
          content:
            'Bacon ipsum dolor amet kevin shoulder t-bone, spare ribs meatloaf hamburger tail turkey buffalo tenderloin ham pork pig. Brisket cow venison chicken spare ribs landjaeger. Ribeye pork chop sausage doner, salami corned beef prosciutto swine spare ribs. Leberkas pork loin venison, picanha sausage salami swine rump turducken.',
          date: new Date('2021-11-23'),
          createdAt: new Date('2021-08-25'),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('messages', null, {});
  },
};
