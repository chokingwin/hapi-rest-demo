'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.createTable(
      'users',
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        nick_name: Sequelize.STRING,
        avatar_url: Sequelize.STRING,
        gender: Sequelize.INTEGER,
        open_id: Sequelize.STRING,
        session_key: Sequelize.STRING,
        created_at: Sequelize.DATE,
        updated_at: Sequelize.DATE
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.dropTable('users');
  }
};
