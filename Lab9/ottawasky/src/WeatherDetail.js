import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Container, Card } from 'react-bootstrap';
import NavbarComponent from './NavbarComponent'; // Import NavbarComponent
import FooterComponent from './FooterComponent'; // Import FooterComponent
import axios from 'axios';
import moment from 'moment';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook

const WeatherDetail = () => {

  const { region } = useParams();
  const [weather, setWeatherData] = useState(null);
  const[forecast, setForecastData] = useState(null); // Add forecast state variable [1/2]
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation(); // Access the translation function

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const weatherResponse = await axios.get(`http://api.weatherapi.com/v1/current.json?key=273c7f3252a74a499f1184946241703&q=${region}&aqi=no`);
        const forecastResponse = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=273c7f3252a74a499f1184946241703&q=${region}&days=4`); // Fetch forecast data [2/2]
        setWeatherData(weatherResponse.data);
        setForecastData(forecastResponse.data); // Set forecast data [2/2]
        setLoading(false);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setLoading(false);
      }
    };

    fetchWeather();
  }, [region]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!weather) {
    return <div>Weather data not available</div>;
  }

  const iconUrl = weather.current.is_day ? `http:${weather.current.condition.icon}` : `http:${weather.current.condition.icon}`;

  const renderThreeDayForecast = () => {
    
  
    // Ensure that we have forecast data before attempting to render
    if (forecast && forecast.forecast.forecastday) {
      const nextDaysForecast = forecast.forecast.forecastday.slice(1); // Skip the first day (today)
      return nextDaysForecast.map((forecastDay, idx) => (
        <Col md={4} key={idx}>
          <Card>
            <Card.Img variant="top" src={`http:${forecastDay.day.condition.icon}`} className="mx-auto d-block" style={{ width: '120px', height: '120px' }}/>
            <Card.Body>
              <Card.Title style={{ fontWeight: 'bold' }}>{moment(forecastDay.date).format('dddd, MMM Do')}</Card.Title>
              <Card.Text className="ForecastCondition">
                <strong>{forecastDay.day.condition.text}</strong> <br />
                <strong>{`${forecastDay.day.mintemp_c} ~ ${forecastDay.day.maxtemp_c}`}°C</strong> <br />
              </Card.Text>
              <Card.Text className="WeatherDetails">
                <strong>{t('weatherDetail.uvIndex')}:</strong> {forecastDay.day.uv}<br />
                <strong>{t('weatherDetail.chanceOfRain')}:</strong> {forecastDay.day.daily_chance_of_rain}%<br />
                <strong>{t('weatherDetail.wind')}:</strong> {forecastDay.day.maxwind_kph} kph<br />
                {/* Add additional details as needed */}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ));
    } else {
      return <div>{t('weatherDetails.noForecastData')}</div>;
    }
  };
  
  
  return (
    <div className="App d-flex flex-column min-vh-100">
      <NavbarComponent />
      <Container className="mt-5 weather-detail-page">
        {/* Render weather data here */}
        <Card>
          <Card.Body>
            <Card.Title className="WeatherDetailsRegionTitle" style={{ textAlign: 'left', fontSize: '60px' }}>
              {weather.location.name}
            </Card.Title>
            <Card.Img variant="top" src={iconUrl} style={{ width: '120px', height: '120px' }} />
            <Card.Text className="WeatherDetailConditionTitle">
              <strong>{weather.current.condition.text}</strong>
            </Card.Text>

            <Row>
              <Col>
                <Card.Text className="WeatherDetails">
                  <strong>{t('weatherDetail.temperature')}:</strong> {weather.current.temp_c}°C<br />
                  <strong>{t('weatherDetail.feelsLike')}:</strong> {weather.current.feelslike_c}°C<br />
                  <strong>{t('weatherDetail.wind')}:</strong> {weather.current.wind_kph} kph<br />
                  <strong>{t('weatherDetail.humidity')}:</strong> {weather.current.humidity}%<br />
                  <strong>{t('weatherDetail.uvIndex')}:</strong> {weather.current.uv}<br />
                </Card.Text>
              </Col>
              <Col>
                <Card.Text className="WeatherDetails">
                  <strong>{t('weatherDetail.pressure')}:</strong> {weather.current.pressure_mb} mb<br />
                  <strong>{t('weatherDetail.visibility')}:</strong> {weather.current.vis_km} km<br />
                  <strong>{t('weatherDetail.precipitation')}:</strong> {weather.current.precip_mm} mm<br />
                  <strong>{t('weatherDetail.cloudCover')}:</strong> {weather.current.cloud}%<br />
                  <strong>{t('weatherDetail.gust')}:</strong> {weather.current.gust_kph} kph<br />
                </Card.Text>
              </Col>
            </Row>

            <Card.Text className="WeatherDetails">
              <strong>{t('weatherDetail.lastUpdated')}:</strong> {new Date(weather.current.last_updated).toLocaleString()}
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Card.Body>
            <Card.Title style={{ fontSize: '24px', fontFamily: 'constantia', fontWeight: 'bold' }}>{t('weatherDetail.forecast')}</Card.Title>
            <Row>
              {renderThreeDayForecast()}
            </Row>
          </Card.Body>
        </Card>
        {/* You can also add a forecast section here using weatherData.forecast.forecastday */}
      </Container>
      <FooterComponent />
    </div>
  );
};

export default WeatherDetail;
