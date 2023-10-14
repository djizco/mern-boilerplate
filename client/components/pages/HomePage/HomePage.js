import React, { useEffect } from 'react';

import R from 'ramda';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'redux-first-history';

import Container from 'react-bulma-companion/lib/Container';
import Section from 'react-bulma-companion/lib/Section';
import Title from 'react-bulma-companion/lib/Title';

export default function HomePage() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  useEffect(() => {
    if (R.isEmpty(user)) {
      dispatch(push('/login'));
    }
  }, [dispatch, user]);

  return (
    <Section>
      <Container>
        <Title size="1" textAlign="center">
          Home Page
        </Title>
      </Container>
    </Section>
  );
}
