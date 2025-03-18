const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const sequelize = require("./config/database");
const User = require("./models/User");
const Recipe = require("./models/Recipe");
const recipeRoutes = require("./routes/recipeRoutes");
const authRoutes = require("./routes/authRoutes");

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

sequelize.sync({ alter: true }) // Creates tables if they don’t exist
    .then(() => console.log("PostgreSQL Database connected and models synchronized"))
    .catch(err => console.log("Database Error:", err));

app.get("/", (req, res) => {
    res.send("API is running...");
});

app.use("/api/recipes", recipeRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));