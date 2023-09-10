const withAuth = (req, res, next) => {
    if (!loggedIn) {
      res.redirect("/login");
    } else {
      next();
    }
  };
  
  module.exports = withAuth;
  