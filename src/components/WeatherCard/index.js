import { useEffect, useState } from 'react';
import './style.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

export default function WeatherCard() {

  const [weather, setWeather] = useState({});
  const [temperature, setTemperature] = useState(0);
  const [ rain, setRain ] = useState(0);

  useEffect(() => {
    getWeatherData()
  }, []);

  function evalRain() {
    if (rain === 0) {
      return "No rain";
    }

    if (rain > 0 && rain < 0.5) {
      return "Light showers";
    }

    return "Heavy rain."
  }

  function getWeatherData() {
    const fetchData = async () => {
      return await axios.get('https://api.open-meteo.com/v1/forecast?latitude=40.71&longitude=-74.01&hourly=temperature_2m');
    }
  
    fetchData().then(res => {
      const data = res.data;
      setWeather(data);
      setTemperature(data.hourly['temperature_2m'][0])
      setRain(data.hourly['rain'][0]);
    });
  }

  return (
    <Card style={{ width: '100%' }} bg="dark" text="light">
    <Card.Img variant="top" height={"250"} src="/img/newYork.png" />
    <Card.Body>
      <Card.Title>Weather Right Now</Card.Title>
      <Card.Subtitle>
        New York, NY.
      </Card.Subtitle>
      <Card.Text>{`${temperature}°C`}</Card.Text>
      <Card.Text>{evalRain()}</Card.Text>
      <Button variant="light" onClick={getWeatherData}>Refresh</Button>
    </Card.Body>
  </Card>
  );
}
