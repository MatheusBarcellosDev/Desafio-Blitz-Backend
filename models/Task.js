const Task = (sequelize, DataTypes) => {
  const Task = sequelize.define(
    "Task",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      content: { type: DataTypes.STRING, allowNull: false },
      userId: { type: DataTypes.INTEGER, foreignKey: true },
      pending: DataTypes.BOOLEAN,
      inProgress: DataTypes.BOOLEAN,
      ready: DataTypes.BOOLEAN,
      published: DataTypes.DATE,
      updated: DataTypes.DATE,
    },
    {
      tableName: "Tasks",
      timestamp: true,
      underscore: true,
    }
  );

  Task.associate = (models) => {
    Task.belongsTo(models.User, {
      foreignKey: "userId",
      as: "user",
    });
  };

  return Task;
};

module.exports = Task;
