import React from 'react';
import PropTypes from 'prop-types';

import Modal from 'react-bulma-companion/lib/Modal';

import ConfirmDeleteTodo from '_organisms/ConfirmDeleteTodo';

export default function ConfirmModal({ confirm, closeModal, deleteTodo }) {
  return (
    <Modal className="confirm-modal" active={confirm}>
      <Modal.Background />
      <Modal.Content>
        <ConfirmDeleteTodo closeModal={closeModal} deleteTodo={deleteTodo} />
      </Modal.Content>
      <Modal.Close size="large" aria-label="close" onClick={closeModal} />
    </Modal>
  );
}

ConfirmModal.propTypes = {
  confirm: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};
