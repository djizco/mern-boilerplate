const passport    = require('passport');
const session     = require('express-session');
const MongoStore  = require('connect-mongo');
const uuid        = require('uuid');

const Strategies  = require('./strategies');
const { User }    = require('../database/schemas');

module.exports = app => {
  const sessionConfig = {
    store: MongoStore.create({
      mongoUrl: process.env.DATABASE_URL,
      collectionName: 'sessions',
    }),
    genid: () => uuid.v4(),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  };

  app.use(session(sessionConfig));
  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser((user, done) => done(null, user.id));

  passport.deserializeUser((id, done) =>
    User.findById({ _id: id })
      .then(user => done(null, user))
      .catch(err => console.warn(`err at deserialize: ${err}`)));

  passport.use(Strategies.local);
};
