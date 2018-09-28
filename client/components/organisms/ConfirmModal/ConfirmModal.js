import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ConfirmDeleteTodo from '_molecules/ConfirmDeleteTodo';

export default function ConfirmModal(props) {
  const { confirm, closeModal, deleteTodo } = props;
  const modalClasses = classNames({
    modal: true,
    'confirm-modal': true,
    'is-active': confirm,
  });

  return (
    <div className={modalClasses}>
      <div className="modal-background" />
      <div className="modal-content">
        <ConfirmDeleteTodo closeModal={closeModal} deleteTodo={deleteTodo} />
      </div>
      <button
        type="button"
        className="modal-close is-large"
        aria-label="close"
        onClick={closeModal}
      />
    </div>
  );
}

ConfirmModal.propTypes = {
  confirm: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};
