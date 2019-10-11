import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import { Switch, Route } from 'react-router';
import * as R from 'ramda';

import ProfileSettings from '_templates/ProfileSettings';
import AccountSettings from '_templates/AccountSettings';
import SettingsMenu from '_organisms/SettingsMenu';

export default function SettingsPage({ location }) {
  const dispatch = useDispatch();
  const { user } = useSelector(R.pick(['user']));

  useEffect(() => {
    if (R.isEmpty(user)) {
      dispatch(push('/login'));
    }
  }, []);

  return (
    <div className="settings-page page">
      <div className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-3">
              <SettingsMenu pathname={location.pathname} />
            </div>
            <div className="column">
              <Switch>
                <Route path="/settings/profile/" component={ProfileSettings} />
                <Route path="/settings/account/" component={AccountSettings} />
                <Route path="*" component={ProfileSettings} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

SettingsPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};
