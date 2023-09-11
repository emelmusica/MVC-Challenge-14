const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;
const routes = require("./controllers");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const { Sequelize } = require('sequelize');


// Middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sets up session for cookies and connect to our Sequelize db
const sess = {
  secret: "Super secret secret",
  cookie: {
    maxAge: 60 * 60 * 1000,
    httpOnly: true,
    secure: false,
    sameSite: "lax",
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.get("/login", (req, res) => {
  res.render("partials/loginForm");
});

app.get("/signUp", (req, res) => {
  res.render("partials/signUp");
});

app.get("/", (req, res) => {
  res.render("home");
});


app.use(routes);

// View engine setup
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, "views/layouts"),
    partialsDir: path.join(__dirname, "views/partials"),
  })
);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

// Start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log("Server listening on: http://localhost:" + PORT);
  });
});
