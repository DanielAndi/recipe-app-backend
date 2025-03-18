const express = require("express");
const Recipe = require("../models/Recipe");

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const newRecipe = await Recipe.create(req.body);
        res.status(201).json(newRecipe);
    } catch (error) {
        res.status(500).json({ error: "Error creating recipe" });
    }
});

router.get("/", async (req, res) => {
    try {
        const recipes = await Recipe.findAll();
        res.json(recipes);
    } catch (error) {
        res.status(500).json({ error: "Error fetching recipes" });
    }
});

module.exports = router;
