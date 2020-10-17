import React from 'react';

import Section from 'react-bulma-companion/lib/Section';
import Container from 'react-bulma-companion/lib/Container';
import Title from 'react-bulma-companion/lib/Title';

export default function Lost() {
  return (
    <Section className="lost-section">
      <Container>
        <Title size="1">
          404
        </Title>
        <p>
          The page you requested was not found.
        </p>
      </Container>
    </Section>
  );
}
