# MERN Boilerplate
MongoDB Express.js React.js Node.js

A Full MERN Stack Boilerplate for Web Apps. Includes a local authentication system using passport. User is given a simple profile with Full Name and Profile Picture. User is also able to reset password and username case.

## Quick Start

#### Setup
```
brew install mongodb
npm install
```

#### for Development

Start the database
```
mongod
```

Start the client
```
npm run dev
```

Start the server
```
npm start
```

#### for Production

Start the database
```
mongod
```

Start the Server
```
npm run prod
```

#### Other Commands

```
npm run build
npm test
npm run test:verbose
npm run lint
npm run lint:fix
```

## Setup Instructions

To setup your own project, you will need to copy the contents of this project into a new repo.
You will need to update the content in these files to names of your project and yourself:

* package.json: name, version, description, repository, author, bugs, homepage,
* LICENSE: (update to your preferred license)
* client/index.html: description and title
* this README.md

This is also a good time to go through the included libraries to add or remove features that you want.

After this you can commit the files into a new repository and push up to your github.
You can now start updating files in your client to begin working on your own project!

## Code Structure

```
- client
  - api
  - assets
    - images
    - icons
  - components
    - atoms
    - molecules
    - organisms
    - templates
    - pages
    - environment
  - store
    - actions
    - reducers
  - styles
  - utils
- server
  - config
  - database
  - routes
- scripts
```

Component Heirarchy:

Environment > Pages > Templates > Organisms > Molecules > Atoms

This is based on atomic design. Learn more about [atomic design](http://bradfrost.com/blog/post/atomic-web-design/).

## Technologies

[React](https://facebook.github.io/react/) - View Library

[Redux](http://redux.js.org/) - State Manager

[Webpack](https://webpack.github.io/) - Code Packager for React

[Express](http://expressjs.com/) - Node Application Framework

[Mongoose](http://mongoosejs.com/) - MongoDB Framework

[Passport](http://www.passportjs.org/) - Authentication Framework

[React Notification System](https://github.com/igorprado/react-notification-system) - Notification System

[Bulma](http://bulma.io/) - CSS Framework

[FontAwesome](http://fontawesome.io/) - Icons

[Ramda](http://ramdajs.com/) - Functional Library

[SuperAgent](https://github.com/visionmedia/superagent) - HTTP Request Library

[ESLint](http://eslint.org/) - Code Linter

[Jest](https://jestjs.io/) - JavaScript Testing Framework

[Enzyme](https://github.com/airbnb/enzyme) - React View Testing
