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

  state = {
    loading: true,
  }

  componentDidMount() {
    const { user, pushToLogin, getTodos } = this.props;
    if (R.isEmpty(user)) {
      pushToLogin();
    } else {
      getTodos()
        .then(() => this.setState({ loading: false }));
    }
  }

  render() {
    return !this.state.loading && (
      <TodoPage />
    );
  }
}
