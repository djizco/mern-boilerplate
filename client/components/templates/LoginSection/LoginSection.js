import React from 'react';
import Login from '_organisms/Login';

import Section from 'react-bulma-companion/lib/Section';

export default function LoginSection() {
  return (
    <Section className="login-section">
      <Login />
    </Section>
  );
}
