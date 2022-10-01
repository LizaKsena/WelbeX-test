const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Test extends Model {
    static associate(models) {
      // define association here
    }
  }
  Test.init({
    date: DataTypes.DATE,
    name: DataTypes.STRING,
    number: DataTypes.INTEGER,
    distance: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Test',
  });
  return Test;
};
