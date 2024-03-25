import React from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import NavbarComponent from './NavbarComponent'; // Import NavbarComponent
import FooterComponent from './FooterComponent'; // Import FooterComponent
import { useTranslation } from 'react-i18next'; // Import useTranslation hook

const ContactInfo = () => {
  const { t } = useTranslation(); // Access the translation function

  return (
    <div className="App d-flex flex-column min-vh-100">
      <NavbarComponent />
      <Container>
        <Row className="my-5">
          <Col style={{ textAlign: 'left' }}>
            <h1>{t('contactInfoDetails.title')}</h1>
            <p>{t('contactInfoDetails.welcomeMessage')}</p>
            <p>{t('contactInfoDetails.inquiriesAssistance')}</p>
            <ul>
              <li>{t('contactInfoDetails.email')}: info@ottawasky.com</li>
              <li>{t('contactInfoDetails.phone')}: +1 (123) 456-7890</li>
              <li>{t('contactInfoDetails.address')}: 123 Weather Street, Ottawa, ON, Canada</li>
            </ul>
            {/* Include more information about your company, the services it offers, history, team members, etc. */}
          </Col>
        </Row>
      </Container>
      <FooterComponent />
    </div>
  );
};

export default ContactInfo;
