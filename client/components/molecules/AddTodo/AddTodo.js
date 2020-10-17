import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Columns from 'react-bulma-companion/lib/Columns';
import Column from 'react-bulma-companion/lib/Column';
import Button from 'react-bulma-companion/lib/Button';
import Input from 'react-bulma-companion/lib/Input';

import { attemptAddTodo } from '_thunks/todos';
import useKeyPress from '_hooks/useKeyPress';

export default function AddTodo() {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const handleAddTodo = () => {
    if (text) {
      dispatch(attemptAddTodo(text));
      setText('');
    }
  };

  useKeyPress('Enter', handleAddTodo);

  const updateText = e => setText(e.target.value);

  return (
    <Columns className="add-todo" gapless>
      <Column size="10">
        <Input value={text} onChange={updateText} />
      </Column>
      <Column size="2">
        <Button color="success" onClick={handleAddTodo} fullwidth>
          Add
        </Button>
      </Column>
    </Columns>
  );
}
