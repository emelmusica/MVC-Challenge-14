const router = require("express").Router();
const { User } = require("../../models");

// get userData test
router.get("/", async (req, res) => {
    try {
      const userData = await User.findAll();
      res.status(200).json(userData);
    } catch (error) {
        console.error("Error fetching all users:" error);
        res.status(500).json({ message: "Internal Server Error", error });
    }
});    

// login post request

// post request logout
