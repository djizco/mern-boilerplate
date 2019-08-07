import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { attemptAddTodo } from '_thunks/todos';
import useKeyPress from '_hooks/useKeyPress';
import Button from '_atoms/Button';

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
    <div className="add-todo columns is-gapless">
      <div className="column is-10">
        <input className="input" type="text" value={text} onChange={updateText} />
      </div>
      <div className="column is-2">
        <Button
          style={{ width: '100%' }}
          onClick={handleAddTodo}
          label="Add"
          type="success"
        />
      </div>
    </div>
  );
}
