const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class RentProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Product }) {
      // define association here
      this.belongsTo(Product, { foreignKey: 'product_id', onDelete: 'CASCADE' });
    }
  }
  RentProduct.init({
    user_renter: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'RentProduct',
  });
  return RentProduct;
};
