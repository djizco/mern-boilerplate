import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import Root from './Root';

export default class RootContainer extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
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

  scrollToTop = () => window.scrollTo(0, 0)

  render() {
    const { store, history, routes } = this.props;
    return !this.state.loading && (
      <Root store={store} history={history} scrollToTop={this.scrollToTop} routes={routes} />
    );
  }
}
