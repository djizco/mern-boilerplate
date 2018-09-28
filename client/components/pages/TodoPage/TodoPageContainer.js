import React, { Component } from 'react';
import PropTypes from 'prop-types';
import R from '_utils/ramda';
import TodoPage from './TodoPage';

export default class TodoPageContainer extends Component {
  static propTypes = {
    user: PropTypes.shape({}).isRequired,
    pushToLogin: PropTypes.func.isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  }

  componentDidMount() {
    const { user, pushToLogin } = this.props;
    if (R.isEmpty(user)) {
      pushToLogin();
    }
  }

  render() {
    return (
      <TodoPage location={this.props.location} />
    );
  }
}
