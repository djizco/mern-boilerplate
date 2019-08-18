# MERN Boilerplate
MongoDB Express.js React.js Node.js

A Full MERN Stack Boilerplate for Web Apps. Includes a local authentication system using passport. User is given a simple profile with Full Name and Profile Picture. User is also able to reset password and username case.

Note: This project name has changed (8/17/19).

## Quick Start

#### Setup
```bash
brew install mongodb
npm install
```

#### for Development

Start the database
```bash
mongod
# or
brew services start mongodb
```

Start the client
```bash
npm run dev
```

Start the server
```bash
npm start
```

#### for Production

Start the database
```bash
mongod
# or
brew services start mongodb
```

Start the Server
```bash
npm run prod
```

#### Other Commands

```bash
npm run build
npm test
npm run test:verbose
npm run lint
npm run lint:fix
```

## Setup Instructions

Note: This is now a github template project. This makes copying the contents of the project
into a new repo very simple.

To setup your own project, you will need to copy the contents of this project into a new repo.
You will need to update the content in these files to names of your project and yourself:

* package.json: name, version, description, repository, author, bugs, homepage
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
  - hooks
  - store
    - actions
    - reducers
    - thunks
    - tests
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

[Webpack](https://webpack.github.io/) - Module Bundler

[Express](http://expressjs.com/) - Node Application Framework

[Mongoose](http://mongoosejs.com/) - MongoDB Framework

[Passport](http://www.passportjs.org/) - Authentication Framework

[React Notification System](http://igorprado.com/react-notification-system/) - Notification System

[Bulma](http://bulma.io/) - CSS Framework

[FontAwesome](http://fontawesome.io/) - Icons

[Ramda](http://ramdajs.com/) - Functional Library

[date-fns](https://date-fns.org/) - Date Functions Library

[SuperAgent](https://github.com/visionmedia/superagent) - HTTP Request Library

[ESLint](http://eslint.org/) - Code Linter

[Jest](https://jestjs.io/) - Testing Framework

[Enzyme](https://airbnb.io/enzyme/) - React View Testing
