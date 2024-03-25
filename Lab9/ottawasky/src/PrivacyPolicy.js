import React from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import NavbarComponent from './NavbarComponent'; // Import NavbarComponent
import FooterComponent from './FooterComponent'; // Import FooterComponent
import { useTranslation } from 'react-i18next'; // Import useTranslation hook

const PrivacyPolicy = () => {
  const { t } = useTranslation(); // Access the translation function

  return (
    <div className="App d-flex flex-column min-vh-100">
      <NavbarComponent />
      <Container>
        <Row className="my-5">
          <Col style={{ textAlign: 'left' }}>
            <h1>{t('privacyPolicyDetails.title')}</h1>
            <p>{t('privacyPolicyDetails.description')}</p>
            <p>{t('privacyPolicyDetails.agreement')}</p>
            {/* Include additional details about your privacy policy */}
          </Col>
        </Row>
      </Container>
      <FooterComponent />
    </div>
  );
};

export default PrivacyPolicy;
