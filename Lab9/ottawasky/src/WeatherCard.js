import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import './App.css';

const WeatherCard = ({ region }) => {
  const [weather, setWeather] = useState(null);
  const navigate = useNavigate(); // Hook for navigation
  const { t } = useTranslation(); // Access the translation function

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=273c7f3252a74a499f1184946241703&q=${region}&aqi=no`);
      setWeather(response.data);
    };

    fetchWeather();
  }, [region]);

  const getUVIndexCategory = (uvIndex, uvCategories) => {
    if (uvIndex >= 0 && uvIndex <= 2) return uvCategories.low;
    if (uvIndex >= 3 && uvIndex <= 5) return uvCategories.moderate;
    if (uvIndex >= 6 && uvIndex <= 7) return uvCategories.high;
    if (uvIndex >= 8 && uvIndex <= 10) return uvCategories.veryHigh;
    if (uvIndex >= 11) return uvCategories.extreme;
    return uvCategories.unknown;
  };

  if (!weather) return <div>Loading...</div>;

  const iconUrl = weather.current.is_day ? `http:${weather.current.condition.icon}` : `http:${weather.current.condition.icon}`;
  const uvCategories = {
    low: t('weatherCard.uvCategories.low'),
    moderate: t('weatherCard.uvCategories.moderate'),
    high: t('weatherCard.uvCategories.high'),
    veryHigh: t('weatherCard.uvCategories.veryHigh'),
    extreme: t('weatherCard.uvCategories.extreme'),
    unknown: t('weatherCard.uvCategories.unknown')
  };
  const uvCategory = getUVIndexCategory(weather.current.uv, uvCategories);

  const handleCardClick = () => {
    navigate(`/weather/${region}`); // Navigate to the detailed page for the region
  };

  return (
    <Card style={{ width: '12rem', minHeight: '20rem', cursor: 'pointer' }} onClick={handleCardClick}>
      <Card.Body className='text-center'>
        <Card.Title className="regionTitle">{weather.location.name}</Card.Title>
        <Card.Img variant="top" src={iconUrl} />
        <Card.Text className="WeatherCondition">
          <strong>{weather.current.condition.text}</strong>
        </Card.Text>
        <Card.Text className="WeatherDetails">
          <strong>{t('weatherCard.temp')}:</strong> {weather.current.temp_c}&deg;C
        </Card.Text>
        <Card.Text className="WeatherDetails">
          <strong>{t('weatherCard.feelsLike')}:</strong> {weather.current.feelslike_c}&deg;C
        </Card.Text>
        <Card.Text className="WeatherDetails">
          <strong>{t('weatherCard.uvIndex')}:</strong> {weather.current.uv} ({uvCategory})
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default WeatherCard;
