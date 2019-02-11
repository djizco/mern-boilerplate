import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import R from '_utils/ramda';
import LoginSection from '_templates/LoginSection';

export default function LoginPage({ user, pushToHome }) {
  useEffect(() => {
    if (!R.isEmpty(user)) {
      pushToHome();
    }
  }, []);

  return (
    <div className="login-page page">
      <LoginSection />
    </div>
  );
}

LoginPage.propTypes = {
  user: PropTypes.shape({}).isRequired,
  pushToHome: PropTypes.func.isRequired,
};
