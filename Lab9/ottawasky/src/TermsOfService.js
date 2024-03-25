import React from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import NavbarComponent from './NavbarComponent'; // Import NavbarComponent
import FooterComponent from './FooterComponent'; // Import FooterComponent
import { useTranslation } from 'react-i18next'; // Import useTranslation hook

const TermsOfServices = () => {
  const { t } = useTranslation(); // Access the translation function

  return (
    <div className="App d-flex flex-column min-vh-100">
      <NavbarComponent />
      <Container>
        <Row className="my-5">
          <Col style={{ textAlign: 'left' }}>
            <h2>{t('termsOfServiceDetails.title')}</h2>
            <p>{t('termsOfServiceDetails.welcomeMessage')}</p>
            <h3>{t('termsOfServiceDetails.acceptance.sectionTitle')}</h3>
            <p>{t('termsOfServiceDetails.acceptance.content')}</p>
            <h3>{t('termsOfServiceDetails.useLicense.sectionTitle')}</h3>
            <p>{t('termsOfServiceDetails.useLicense.content')}</p>
            <h3>{t('termsOfServiceDetails.disclaimer.sectionTitle')}</h3>
            <p>{t('termsOfServiceDetails.disclaimer.content')}</p>
            {/* Include more terms of service content as needed */}
          </Col>
        </Row>
      </Container>
      <FooterComponent />
    </div>
  );
};

export default TermsOfServices;
