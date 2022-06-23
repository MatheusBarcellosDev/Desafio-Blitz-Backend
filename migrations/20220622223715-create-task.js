"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Tasks", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      content: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        references: {
          model: "Users",
          key: "id",
        },
      },
      pending: {
        type: Sequelize.BOOLEAN,
      },
      inProgress: {
        type: Sequelize.BOOLEAN,
      },
      ready: {
        type: Sequelize.BOOLEAN,
      },
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable("Tasks");
  },
};
