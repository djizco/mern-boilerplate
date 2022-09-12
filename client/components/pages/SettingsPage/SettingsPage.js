import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'redux-first-history';
import { Routes, Route, useLocation } from 'react-router-dom';
import R from 'ramda';

import Section from 'react-bulma-companion/lib/Section';
import Container from 'react-bulma-companion/lib/Container';
import Columns from 'react-bulma-companion/lib/Columns';
import Column from 'react-bulma-companion/lib/Column';

import SettingsMenu from './SettingsMenu';
import ProfileSettings from './ProfileSettings';
import AccountSettings from './AccountSettings';

export default function SettingsPage() {
  const dispatch = useDispatch();
  const { user } = useSelector(R.pick(['user']));
  const { pathname } = useLocation();

  useEffect(() => {
    if (R.isEmpty(user)) {
      dispatch(push('/login'));
    }
  }, [dispatch, user]);

  return (
    <div className="settings-page page">
      <Section>
        <Container>
          <Columns>
            <Column size="3">
              <SettingsMenu pathname={pathname} />
            </Column>
            <Column size="9">
              <Routes>
                <Route path="profile" element={<ProfileSettings />} />
                <Route path="account" element={<AccountSettings />} />
                <Route path="*" element={<ProfileSettings />} />
              </Routes>
            </Column>
          </Columns>
        </Container>
      </Section>
    </div>
  );
}
