import React from 'react';

import Section from 'react-bulma-companion/lib/Section';
import Title from 'react-bulma-companion/lib/Title';

export default function LostPage() {
  return (
    <Section textAlign="center">
      <Title size="1">
        404
      </Title>
      <Title subtitle size="6">
        The page you requested was not found.
      </Title>
    </Section>
  );
}
