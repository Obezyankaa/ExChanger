/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.bulkInsert(
      'Categories',
      [
        {
          name: 'Инструменты',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Личные вещи',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Хобби и отдых',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Оборудование',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Электроника',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
