import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import { Switch, Route } from 'react-router';
import R from 'ramda';

import Section from 'react-bulma-companion/lib/Section';
import Container from 'react-bulma-companion/lib/Container';
import Columns from 'react-bulma-companion/lib/Columns';
import Column from 'react-bulma-companion/lib/Column';

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
      <Section>
        <Container>
          <Columns>
            <Column size="3">
              <SettingsMenu pathname={location.pathname} />
            </Column>
            <Column>
              <Switch>
                <Route path="/settings/profile/" component={ProfileSettings} />
                <Route path="/settings/account/" component={AccountSettings} />
                <Route path="*" component={ProfileSettings} />
              </Switch>
            </Column>
          </Columns>
        </Container>
      </Section>
    </div>
  );
}

SettingsPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};
