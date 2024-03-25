// NavbarComponent.js
import React from 'react';
import { Navbar, Container, Nav, DropdownButton, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './resources/logo.png'; // Make sure this path is correct
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import i18n from 'i18next'; // Import i18n instance
import flagImage from './resources/language.png';

const NavbarComponent = () => {
  const { t } = useTranslation(); // Access the translation function

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Change the language using i18n object
  };

  return (
    <header className="App-header">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/"><img src={logo} alt="OttawaSky.com" style={{ height: '60px', width: '120px' }} /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">{t('navbarHome')}</Nav.Link>
            {/* Uncomment or add links as needed */}
            {/* <Nav.Link as={Link} to="/forecast">{t('forecast')}</Nav.Link>
            <Nav.Link as={Link} to="/history">{t('historicalData')}</Nav.Link>
            <Nav.Link as={Link} to="/alert">{t('alertsSetup')}</Nav.Link> */}
            <Nav.Link as={Link} to="/help">{t('navbarHelp')}</Nav.Link>
          </Nav>
          {/* Change Language Dropdown */}
          <DropdownButton variant="light" title={<span><span>{t('language')} </span><img src={flagImage} alt="Flag" /></span>}>
            <Dropdown.Item onClick={() => changeLanguage('en')}>English</Dropdown.Item>
            <Dropdown.Item onClick={() => changeLanguage('fr')}>Français</Dropdown.Item>
            {/* Add more language options as needed */}
          </DropdownButton>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavbarComponent;
