const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes.js");

router.use("/api", apiRoutes);
router.use("/", homeRoutes);

router.use((req, res) => {
  res.send(
    "<h1>Oops! </h1><p>< We seem to have hit a snag! <a href='javascript:history.back()'>go back</a> to the right path!</p>"
  );
});

module.exports = router;
