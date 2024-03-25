import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next'; // Import I18nextProvider
import i18n from './i18n'; // Import i18n configuration

// CSS Imports
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// JS Imports
import HomePage from './HomePage';
import AboutUs from './AboutUs';
import Help from './Help';
import ContactInfo from './ContactInfo';
import TermsOfService from './TermsOfService';
import PrivacyPolicy from './PrivacyPolicy';
import WeatherDetail from './WeatherDetail';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/help" element={<Help />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactInfo />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/weather/:region" element={<WeatherDetail />} />
        </Routes>
      </Router>
    </I18nextProvider>
  );
}

export default App;
