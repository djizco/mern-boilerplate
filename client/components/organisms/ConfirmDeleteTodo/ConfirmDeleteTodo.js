import React from 'react';
import PropTypes from 'prop-types';

export default function ConfirmDeleteTodo({ closeModal, deleteTodo }) {
  return (
    <div className="card">
      <div className="card-content">
        <div className="content has-text-centered">
          Are you sure you wanted to delete this item?
        </div>
      </div>
      <footer className="card-footer">
        <a className="card-footer-item" onClick={closeModal} onKeyPress={closeModal}>
          Cancel
        </a>
        <a className="card-footer-item" onClick={deleteTodo} onKeyPress={deleteTodo}>
          Delete
        </a>
      </footer>
    </div>
  );
}

ConfirmDeleteTodo.propTypes = {
  closeModal: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};
