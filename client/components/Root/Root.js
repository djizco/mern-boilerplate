import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from '../../routes';

export default function Root(props) {
  const { store, history, scrollToTop } = props;
  return (
    <Provider store={store}>
      <Router onUpdate={scrollToTop} history={history} routes={routes} />
    </Provider>
  );
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  scrollToTop: PropTypes.func.isRequired,
};
