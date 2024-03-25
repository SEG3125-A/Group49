// Elements Imports
import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import { Row, Container } from 'react-bootstrap';
import bgImage from './resources/background.jpg';
import WeatherCard from './WeatherCard';
import NavbarComponent from './NavbarComponent';
import FooterComponent from './FooterComponent';

const HomePage = () => {
    const { t } = useTranslation(); // Access the translation function

    return (
        <div className="App d-flex flex-column min-vh-100">
            <NavbarComponent />

            {/* Main Section */}
            <Container fluid style={{ padding: 0, overflow: 'hidden' }}>
                <Row noGutters style={{ margin: 0 }}>
                    <img src={bgImage} className="MainSectonImage" alt="MainSectionImage" style={{ width: '100%', height: '30vh', objectFit: 'cover' }}></img>
                </Row>
            </Container>
            <br />

            {/* Forecast */}
            <div className="d-flex justify-content-around p-4">
                <WeatherCard region={t('Ottawa')} />
                <WeatherCard region={t('Gatineau')} />
                <WeatherCard region={t('Kanata')} />
                <WeatherCard region={t('Kingston, Ontario')} />
                <WeatherCard region={t('Toronto')} />
                <WeatherCard region={t('Montreal')} />
            </div>
            <br />

            {/* Footer */}
            <FooterComponent />
        </div>
    );
};

export default HomePage;
