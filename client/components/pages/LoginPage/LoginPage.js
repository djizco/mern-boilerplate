import React, { useEffect } from 'react';

import R from 'ramda';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'redux-first-history';

import Section from 'react-bulma-companion/lib/Section';

import LoginPanel from './LoginPanel';

export default function LoginPage() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  useEffect(() => {
    if (!R.isEmpty(user)) {
      dispatch(push('/home'));
    }
  }, [dispatch, user]);

  return (
    <Section display="flex" justifyContent="center">
      <LoginPanel />
    </Section>
  );
}
