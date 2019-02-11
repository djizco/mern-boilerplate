import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import R from '_utils/ramda';
import Register from '_templates/RegisterSection';

export default function RegisterPage({ user, pushToHome }) {
  useEffect(() => {
    if (!R.isEmpty(user)) {
      pushToHome();
    }
  }, []);

  return (
    <div className="register-page page">
      <Register />
    </div>
  );
}

RegisterPage.propTypes = {
  user: PropTypes.shape({}).isRequired,
  pushToHome: PropTypes.func.isRequired,
};
