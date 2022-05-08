const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },  
  },
  {
  // pass in our imported sequelize connection (the direct connection to our database)
  sequelize,
  // don't automatically create createdAt/updatedAt timestamp fields
  timestamps: false,
  // don't pluralize name of database table
  freezeTableName: true,
   // use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
  underscored: true,
  // make it so our model name stays lowercase in the database
    modelName: 'category',
  }
);

module.exports = Category;
