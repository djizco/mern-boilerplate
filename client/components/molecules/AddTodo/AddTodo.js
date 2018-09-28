import React from 'react';
import PropTypes from 'prop-types';
import Button from '_atoms/Button';

export default function AddTodo({ text, updateText, addTodo }) {
  return (
    <div className="add-todo columns is-gapless">
      <div className="column is-10">
        <input className="input" type="text" value={text} onChange={updateText} />
      </div>
      <div className="column is-2">
        <Button
          style={{ width: '100%' }}
          onClick={addTodo}
          label="Add"
          type="success"
        />
      </div>
    </div>
  );
}

AddTodo.propTypes = {
  text: PropTypes.string.isRequired,
  updateText: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
};
