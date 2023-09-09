const { Category } = require("../../models");
const router = require("express").Router();

// Get all categories
router.get("/", async (req, res) => {
    try {
        const categoryData = await Category.findAll();
    } Catch (error) {
        console.error("Error Fetching all Categories", error);
        res.status(500).json(error);
    }
});

// Get a specific category by ID