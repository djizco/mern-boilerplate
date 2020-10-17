import React from 'react';
import PropTypes from 'prop-types';

import Card from 'react-bulma-companion/lib/Card';
import Content from 'react-bulma-companion/lib/Content';

export default function ConfirmDeleteTodo({ closeModal, deleteTodo }) {
  return (
    <Card>
      <Card.Content>
        <Content className="has-text-centered">
          Are you sure you wanted to delete this item?
        </Content>
      </Card.Content>
      <Card.Footer>
        <Card.FooterItem onClick={closeModal} onKeyPress={closeModal}>
          Cancel
        </Card.FooterItem>
        <Card.FooterItem onClick={deleteTodo} onKeyPress={deleteTodo}>
          Delete
        </Card.FooterItem>
      </Card.Footer>
    </Card>
  );
}

ConfirmDeleteTodo.propTypes = {
  closeModal: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};
