'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'bookings',
      [
        {
          userId: 2,
          profileId: 1,
          messageId: 1,
          accepted: false,
          date: new Date('2021-10-03'),
          createdAt: new Date('2021-09-02'),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          profileId: 1,
          messageId: 2,
          accepted: false,
          date: new Date('2021-10-12'),
          createdAt: new Date('2021-09-07'),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          profileId: 1,
          messageId: 3,
          accepted: false,
          date: new Date('2021-10-14'),
          createdAt: new Date('2021-09-01'),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          profileId: 1,
          messageId: 4,
          accepted: false,
          date: new Date('2021-10-19'),
          createdAt: new Date('2021-08-05'),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          profileId: 1,
          messageId: 5,
          accepted: false,
          date: new Date('2021-10-26'),
          createdAt: new Date('2021-10-08'),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          profileId: 1,
          messageId: 6,
          accepted: false,
          date: new Date('2021-10-29'),
          createdAt: new Date('2021-10-15'),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('bookings', null, {});
  },
};
