'use strict';

const timestamps = {
  created_at: new Date(),
  updated_at: new Date(),
};

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert(
      'goods',
      [
        {
          id: 1, name: '商品1-1', shop_id: 1, thumb_url: '1.png', ...timestamps,
        },
        {
          id: 2, name: '商品1-2', shop_id: 1, thumb_url: '2.png', ...timestamps,
        },
        {
          id: 3, name: '商品1-3', shop_id: 1, thumb_url: '3.png', ...timestamps,
        },
        {
          id: 4, name: '商品2-1', shop_id: 2, thumb_url: '4.png', ...timestamps,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    const { Op } = Sequelize;
    return queryInterface.bulkDelete('goods', { id: { [Op.in]: [1, 2, 3, 4] } }, {});
  }
};
