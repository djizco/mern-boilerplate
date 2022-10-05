import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { parseISO, formatDistanceToNow } from 'date-fns';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons/faTrashCan';
import { faBan } from '@fortawesome/free-solid-svg-icons/faBan';
import { faPencil } from '@fortawesome/free-solid-svg-icons/faPencil';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons/faFloppyDisk';
import { faSquare } from '@fortawesome/free-regular-svg-icons/faSquare';
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons/faSquareCheck';

import Box from 'react-bulma-companion/lib/Box';
import Media from 'react-bulma-companion/lib/Media';
import Content from 'react-bulma-companion/lib/Content';
import Level from 'react-bulma-companion/lib/Level';
import Icon from 'react-bulma-companion/lib/Icon';
import Textarea from 'react-bulma-companion/lib/Textarea';

import { attemptToggleCompleteTodo, attemptUpdateTodo, attemptDeleteTodo } from '_store/thunks/todos';
import ConfirmModal from '_components/organisms/ConfirmModal';

const fromNow = date => formatDistanceToNow(parseISO(date), { addSuffix: true });

export default function Todo({ id, text, completed, createdAt, updatedAt }) {
  const dispatch = useDispatch();

  const [currentText, setCurrentText] = useState(text);
  const [edit, setEdit] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [updatedMessage, setUpdatedMessage] = useState('');
  const [createdMessage, setCreatedMessage] = useState('');

  useEffect(() => {
    const updateMessages = () => {
      setUpdatedMessage(updatedAt ? fromNow(updatedAt) : '');
      setCreatedMessage(fromNow(createdAt));
    };

    updateMessages();
    const interval = window.setInterval(updateMessages, 1000);

    return () => clearInterval(interval);
  }, [updatedAt, createdAt]);

  const openModal = () => setConfirm(true);
  const closeModal = () => setConfirm(false);
  const updateText = e => setCurrentText(e.target.value);
  const editTodo = () => setEdit(true);

  const cancelEdit = () => {
    setEdit(false);
    setCurrentText(text);
  };

  const handleUpdateTodo = () => {
    if (currentText) {
      dispatch(attemptUpdateTodo(id, currentText))
        .then(() => setEdit(false));
    }
  };

  const toggleCompleteTodo = () => dispatch(attemptToggleCompleteTodo(id));

  const deleteTodo = () => dispatch(attemptDeleteTodo(id));

  return (
    <Box className="todo" component="li">
      <Media>
        <Media.Left>
          <Icon onClick={toggleCompleteTodo} onKeyPress={toggleCompleteTodo}>
            {completed
              ? <FontAwesomeIcon icon={faSquareCheck} size="lg" />
              : <FontAwesomeIcon icon={faSquare} size="lg" />}
          </Icon>
        </Media.Left>
        <Media.Content>
          <Content>
            <p>
              <small>
                {`created ${createdMessage}`}
              </small>
            </p>
            {edit ? (
              <Textarea
                value={currentText}
                onChange={updateText}
              />
            ) : (
              <p>
                {text}
              </p>
            )}
          </Content>

          <Level mobile>
            <Level.Left>
              {!!updatedAt && (
                <small>
                  {`edited ${updatedMessage}`}
                </small>
              )}
            </Level.Left>
            <Level.Right>
              {edit ? (
                <Icon className="space-right" onClick={handleUpdateTodo} onKeyPress={handleUpdateTodo}>
                  <FontAwesomeIcon icon={faFloppyDisk} size="lg" />
                </Icon>
              ) : (
                <Icon className="space-right" onClick={editTodo} onKeyPress={editTodo}>
                  <FontAwesomeIcon icon={faPencil} size="lg" />
                </Icon>
              )}
              {edit ? (
                <Icon onClick={cancelEdit} onKeyPress={cancelEdit}>
                  <FontAwesomeIcon icon={faBan} size="lg" />
                </Icon>
              ) : (
                <Icon onClick={openModal} onKeyPress={cancelEdit}>
                  <FontAwesomeIcon icon={faTrashCan} size="lg" />
                </Icon>
              )}
            </Level.Right>
          </Level>
        </Media.Content>
      </Media>
      <ConfirmModal
        confirm={confirm}
        closeModal={closeModal}
        deleteTodo={deleteTodo}
      />
    </Box>
  );
}

Todo.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  createdAt: PropTypes.string.isRequired,
  updatedAt: PropTypes.string,
};

Todo.defaultProps = {
  updatedAt: null,
};
