import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import * as R from 'ramda';

import { attemptGetTodos } from '_thunks/todos';
import TodoSection from '_templates/TodoSection';

export default function TodoPage() {
  const dispatch = useDispatch();
  const { user } = useSelector(R.pick(['user']));

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (R.isEmpty(user)) {
      dispatch(push('/login'));
    } else {
      dispatch(attemptGetTodos())
        .then(() => setLoading(false));
    }
  }, []);

  return !loading && (
    <div className="todo-page page">
      <TodoSection />
    </div>
  );
}
