const router = require("express").Router();
const { User } = require("../../models");

// get userData test
router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll();
    res.status(200).json(userData);
  } catch (error) {
    console.error("Error fetching all users:", error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
});

// Login post request
router.post("/login", async (req, res) => {
    try {
      const userData = await User.findOne({ where: { email: req.body.email } });
  
      if (!userData) {
        return res
          .status(401)
          .json({ message: "Incorrect email or password, please try again" });
      }
  
      const validPassword = await userData.checkPassword(req.body.password);
  
      if (!validPassword) {
        return res
          .status(401)
          .json({ message: "Incorrect email or password, please try again" });
      }
  
      req.session.save((error) => {
        if (error) {
          console.error("Session save error:", error);
          return res.status(500).json({ message: "Error saving session." });
        }
        req.session.user_id = userData.id;
        req.session.logged_in = true;
  
        res.json({ message: "Login successful", user_id: userData.id });
      });
    } catch (error) {
      console.error("Error during login:", error);
      res.status(400).json({ message: "An error occurred" });
    }
  });
  
  router.post("/signUp", async (req, res) => {
    try {
      const userData = await User.create(req.body);
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
  
        res.status(200).json(userData);
      });
    } catch (error) {
      console.error("Error during sign-up:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });
  
  // Post request to logout
  router.post("/logout", (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy((error) => {
        if (error) {
          console.error("Error during session destroy:", error);
          return res.status(500).json({ message: "Error logging out." });
        }
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });
  
  module.exports = router;