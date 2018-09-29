import React, { Component } from 'react';
import PropTypes from 'prop-types';
import R from '_utils/ramda';
import TodoPage from './TodoPage';

export default class TodoPageContainer extends Component {
  static propTypes = {
    user: PropTypes.shape({}).isRequired,
    pushToLogin: PropTypes.func.isRequired,
    getTodos: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { user, pushToLogin, getTodos } = this.props;
    if (R.isEmpty(user)) {
      pushToLogin();
    }
    // Add loading state
    getTodos();
  }

  render() {
    return (
      <TodoPage />
    );
  }
}
