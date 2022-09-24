import React from 'react';

import Footer from 'react-bulma-companion/lib/Footer';
import Container from 'react-bulma-companion/lib/Container';
import Content from 'react-bulma-companion/lib/Content';

import styles from './styles.module.css';

export default function FooterComponent() {
  const year = new Date().getFullYear();

  return (
    <Footer className={styles.root}>
      <Container>
        <Content className={styles.content} textAlign="center">
          <p>
            {`Copyright Ⓒ ${year} MERN Boilerplate. All Rights Reserved.`}
          </p>
        </Content>
      </Container>
    </Footer>
  );
}
