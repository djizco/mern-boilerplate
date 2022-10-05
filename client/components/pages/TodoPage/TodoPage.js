import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'redux-first-history';
import R from 'ramda';

import Section from 'react-bulma-companion/lib/Section';
import Title from 'react-bulma-companion/lib/Title';
import Columns from 'react-bulma-companion/lib/Columns';
import Column from 'react-bulma-companion/lib/Column';

import { attemptGetTodos } from '_store/thunks/todos';

import AddTodo from '_components/molecules/AddTodo';
import TodoList from '_components/organisms/TodoList';

export default function TodoPage() {
  const dispatch = useDispatch();
  const { user } = useSelector(R.pick(['user']));

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (R.isEmpty(user)) {
      dispatch(push('/login'));
    } else {
      dispatch(attemptGetTodos())
        .catch(R.identity)
        .then(() => setLoading(false));
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
