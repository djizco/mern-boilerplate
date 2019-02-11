import React, { Component } from 'react';
import PropTypes from 'prop-types';
import R from '_utils/ramda';

import Main from './Main';

export default class MainContainer extends Component {
  static propTypes = {
    attemptGetUser: PropTypes.func.isRequired,
  };

  state = {
    loading: true,
  }

  componentDidMount() {
    const { attemptGetUser } = this.props;

    attemptGetUser()
      .then(() => this.setState({ loading: false }))
      .catch(R.identity);
  }

  componentDidUpdate() {
    this.scrollToTop();
  }

  scrollToTop = () => window.scrollTo(0, 0)

  render() {
    return !this.state.loading && (
      <Main {...this.props} />
    );
  }
}
