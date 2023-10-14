const LocalStrategy = require('passport-local').Strategy;

const { User } = require('../database/schemas');

const Strategies = module.exports;

Strategies.local = new LocalStrategy((username, password, done) => {
  User.findOne({ username })
    .then(user => {
      if (!user) {
        return done(null, false, { message: 'Username doesn\'t exist' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect username or password' });
      }
      return done(null, user);
    })
    .catch(err => done(err));

});
