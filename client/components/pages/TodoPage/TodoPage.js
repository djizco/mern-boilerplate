import React, { useEffect, useState } from 'react';

import R from 'ramda';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'redux-first-history';

import Column from 'react-bulma-companion/lib/Column';
import Columns from 'react-bulma-companion/lib/Columns';
import Section from 'react-bulma-companion/lib/Section';
import Title from 'react-bulma-companion/lib/Title';

import { attemptGetTodos } from '_store/thunks/todos';

import AddTodo from './AddTodo';
import TodoList from './TodoList';

export default function TodoPage() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (R.isEmpty(user)) {
      dispatch(push('/login'));
    } else {
      setLoading(true);

      dispatch(attemptGetTodos())
        .catch(R.identity)
        .finally(() => setLoading(false));
    }
  }, [dispatch, user]);

  return !loading && (
    <div className="todo-page page">
      <Section className="todo-section">
        <Title size="1" className="has-text-centered">
          Todo List:
        </Title>
        <Columns>
          <Column size="8" offset="2" className="has-text-centered">
            <AddTodo />
          </Column>
        </Columns>
        <Columns>
          <Column size="8" offset="2" className="has-text-left">
            <TodoList />
          </Column>
        </Columns>
      </Section>
    </div>
  );
}
