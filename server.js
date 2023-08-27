const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const routes = require("./controllers");

const app = express();

app.use(routes);

// Set up Handlebars as the view engine
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("home"); // Render the view using the default layout file (main.handlebars)
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server listening on: http://localhost:" + PORT);
});
