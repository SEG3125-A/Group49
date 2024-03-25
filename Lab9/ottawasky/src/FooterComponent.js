import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook

const FooterComponent = () => {
  const { t } = useTranslation(); // Access the translation function

  return (
    <footer className="footer mt-auto">
      <Container fluid className='OurInfo bg-dark text-white' style={{ padding: '20px 0' }}>
        <Row>
          <Col>
            <Link to="/about" className="footer-link">{t('aboutUs')}</Link>
          </Col>
          <Col>
            <Link to="/contact" className="footer-link">{t('contactInformation')}</Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <Link to="/terms" className="footer-link">{t('termsOfService')}</Link>
          </Col>
          <Col>
            <Link to="/privacy" className="footer-link">{t('privacyPolicy')}</Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComponent;
