import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import R from '_utils/ramda';
import TodoSection from '_templates/TodoSection';

export default function TodoPage({ user, pushToLogin, getTodos }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (R.isEmpty(user)) {
      pushToLogin();
    } else {
      getTodos()
        .then(() => setLoading(false));
    }
  }, []);

  return !loading && (
    <div className="todo-page page">
      <TodoSection />
    </div>
  );
}

TodoPage.propTypes = {
  user: PropTypes.shape({}).isRequired,
  pushToLogin: PropTypes.func.isRequired,
  getTodos: PropTypes.func.isRequired,
};
