import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import R from '_utils/ramda';

export default function HomePage({ user, pushToLogin }) {
  useEffect(() => {
    if (R.isEmpty(user)) {
      pushToLogin();
    }
  }, []);

  return (
    <div className="home-page page">
      <div className="section">
        <div className="container">
          <h1 className="title is-1">
            Home Page
          </h1>
        </div>
      </div>
    </div>
  );
}

HomePage.propTypes = {
  user: PropTypes.shape({}).isRequired,
  pushToLogin: PropTypes.func.isRequired,
};
