import React from 'react';
import PropTypes from 'prop-types';
import ConfirmModal from '_organisms/ConfirmModal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faBan, faEdit, faSave } from '@fortawesome/free-solid-svg-icons';
import { faSquare, faCheckSquare } from '@fortawesome/free-regular-svg-icons';

export default function Todo(props) {
  const {
    completed, edit, confirm, text, currentText, updated, createdMessage, updatedMessage,
    toggleCompleteTodo, updateText, updateTodo, editTodo, cancelEdit, deleteTodo,
    openModal, closeModal,
  } = props;

  return (
    <li className="todo box">
      <article className="media">
        <figure className="media-left">
          <span className="icon" onClick={toggleCompleteTodo} onKeyPress={toggleCompleteTodo}>
            {completed
              ? <FontAwesomeIcon icon={faCheckSquare} size="lg" />
              : <FontAwesomeIcon icon={faSquare} size="lg" />
            }
          </span>
        </figure>
        <div className="media-content">
          <div className="content">
            <p>
              <small>
                {`created ${createdMessage}`}
              </small>
            </p>
            {edit ? (
              <textarea
                className="textarea"
                value={currentText}
                onChange={updateText}
              />
            ) : (
              <p>
                {text}
              </p>
            )}
          </div>

          <nav className="level is-mobile">
            <div className="level-left">
              {updated && (
                <small>
                  {`edited ${updatedMessage}`}
                </small>
              )}
            </div>
            <div className="level-right">
              {edit ? (
                <span className="icon space-right" onClick={updateTodo} onKeyPress={updateTodo}>
                  <FontAwesomeIcon icon={faSave} size="lg" />
                </span>
              ) : (
                <span className="icon space-right" onClick={editTodo} onKeyPress={editTodo}>
                  <FontAwesomeIcon icon={faEdit} size="lg" />
                </span>
              )}
              {edit ? (
                <span className="icon" onClick={cancelEdit} onKeyPress={cancelEdit}>
                  <FontAwesomeIcon icon={faBan} size="lg" />
                </span>
              ) : (
                <span className="icon" onClick={openModal} onKeyPress={cancelEdit}>
                  <FontAwesomeIcon icon={faTrash} size="lg" />
                </span>
              )}
            </div>
          </nav>
        </div>
      </article>
      <ConfirmModal
        confirm={confirm}
        closeModal={closeModal}
        deleteTodo={deleteTodo}
      />
    </li>
  );
}

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  confirm: PropTypes.bool.isRequired,
  edit: PropTypes.bool.isRequired,
  updated: PropTypes.bool.isRequired,

  text: PropTypes.string.isRequired,
  currentText: PropTypes.string.isRequired,
  createdMessage: PropTypes.string.isRequired,
  updatedMessage: PropTypes.string.isRequired,

  toggleCompleteTodo: PropTypes.func.isRequired,
  updateText: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  cancelEdit: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};
