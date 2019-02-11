import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '_atoms/Button';

import useKeypress from '_hooks/useKeypress';

export default function AddTodo({ addTodo }) {
  const [text, setText] = useState('');

  const onAddTodo = () => {
    if (text) {
      addTodo(text);
      setText('');
    }
  };

  useKeypress('Enter', onAddTodo);

  const updateText = e => setText(e.target.value);


  return (
    <div className="add-todo columns is-gapless">
      <div className="column is-10">
        <input className="input" type="text" value={text} onChange={updateText} />
      </div>
      <div className="column is-2">
        <Button
          style={{ width: '100%' }}
          onClick={onAddTodo}
          label="Add"
          type="success"
        />
      </div>
    </div>
  );
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
