const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      User, View, Category, Favorit, ProductPhoto,
    }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.belongsTo(Category, { foreignKey: 'category_id' });
      this.hasMany(View, { foreignKey: 'product_id' });
      this.hasMany(Favorit, { foreignKey: 'product_id' });
      this.hasMany(ProductPhoto, { foreignKey: 'product_id' });
    }
  }
  Product.init({
    name: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    status: DataTypes.BOOLEAN,
    price: DataTypes.TEXT,
    user_id: DataTypes.INTEGER,
    location: DataTypes.TEXT,
    timing: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
