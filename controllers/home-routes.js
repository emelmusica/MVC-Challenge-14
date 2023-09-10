const router = require("express").Router();
const {  } = require("../models");

router.get("/", async (req, res) => {
  try {
    console.log("Accessed home route");
    console.log(req.session);
    return res.render("home", { logged_in: req.session.logged_in });
  } catch (error) {
    console.error("Error accessing home route:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/login", async (req, res) => {
  try {
    return res.render("login", { logged_in: req.session.logged_in });
  } catch (error) {
    console.error("Error rendering login:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/", async (req, res) => {
  return res.render("postBlog", { logged_in: req.session.logged_in });
});

router.get("/contact", async (req, res) => {
  try {
    return res.render("contact", { logged_in: req.session.logged_in });
  } catch (error) {
    console.error("Error rendering contact:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/about", async (req, res) => {
  try {
    return res.render("about", { logged_in: req.session.logged_in });
  } catch (error) {
    console.error("Error rendering about:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/", async (req, res) => {
  try {
    const petData = await Pet.findAll({
      include: [Category],
    });
    const formattedPetData = petData.map((pet) => pet.get({ plain: true }));
    res.render("", {
      petData: formattedPetData,
      logged_in: req.session.logged_in,
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json(error);
  }
});

router.get("//:id", async (req, res) => {
  try {
    const petData = await Pet.findByPk(req.params.id, {
      include: [Category],
    });
    const formattedPetData = petData.get({ plain: true });
    console.log("check", formattedPetData);
    res.render("", {
      petData: formattedPetData,
      logged_in: req.session.logged_in,
    });
  } catch (error) {
    console.error("Error fetching by ID:", error);
    res.status(500).json(error);
  }
});

module.exports = router;
