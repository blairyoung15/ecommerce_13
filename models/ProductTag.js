const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id',
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'id',
      },
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
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
