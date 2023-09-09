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
router.get("/:id", async (req, res) => {
    try {
        const categoryData = await Category.findByPk(req.params.id);
        if (!categoryData) {
            return res
            .status(404)
            .json{{ message: "no category found with this ID"});
        }
        res.status(200).json(categoryData);
    } catch (error) {
        console.error('Error fetching category with ID ${req.params.id}:', error);
        res.status(500).json(error);
    }
});

module.exports = router;