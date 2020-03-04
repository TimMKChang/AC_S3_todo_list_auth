module.exports = {
  authenticated: (req, res, next) => {
    // authenticate all routes except '/users/*'
    const regex = RegExp('/users|/auth');
    if (regex.test(req.originalUrl)) {
      return next()
    }

    if (req.isAuthenticated()) {
      return next()
    }
    res.redirect('/users/login')
  }
}
