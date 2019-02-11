import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import R from '_utils/ramda';

export default function WelcomePage({ user, pushToHome }) {
  useEffect(() => {
    if (!R.isEmpty(user)) {
      pushToHome();
    }
  }, []);

  return (
    <div className="welcome-page page">
      <div className="section">
        <div className="container">
          <h1 className="title is-1">
            Welcome Page!
          </h1>
        </div>
      </div>
    </div>
  );
}

WelcomePage.propTypes = {
  user: PropTypes.shape({}).isRequired,
  pushToHome: PropTypes.func.isRequired,
};
