// src/AboutUs.js
import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import NavbarComponent from './NavbarComponent'; // Import NavbarComponent
import FooterComponent from './FooterComponent'; // Import FooterComponent

const AboutUs = () => {
  const { t } = useTranslation(); // Access the translation function

  return (
    <div className="App d-flex flex-column min-vh-100">
      <NavbarComponent />
      <Container>
        <Row className="my-5">
          <Col style={{ textAlign: 'left' }}>
            <h1>{t('aboutUsDetails.title')}</h1>
            <p>{t('aboutUsDetails.description')}</p>
            {/* Include more information about your company, the services it offers, history, team members, etc. */}
          </Col>
        </Row>
      </Container>
      <FooterComponent />
    </div>
  );
};

export default AboutUs;
