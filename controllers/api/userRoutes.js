const router = require("express").Router();
const { User } = require("../../models");

// get userData test
router.get("/", async (req, res) => {
    try {
      const userData = await User.findAll();
      res.status(200).json(userData);

// login post request

// post request logout
