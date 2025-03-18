const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./User");

const Recipe = sequelize.define("Recipe", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ingredients: {
        type: DataTypes.JSON,
        allowNull: false
    },
    steps: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
        allowNull: false
    },
    category: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
    },
    difficulty: {
        type: DataTypes.ENUM("Easy", "Medium", "Hard"),
        allowNull: false
    },
    cookingTime: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING
    }
}, {
    timestamps: true
});

// Associate Recipe with User
Recipe.belongsTo(User, { foreignKey: "authorId" });

module.exports = Recipe;
