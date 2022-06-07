import { useState } from 'react';
import './App.css';
import GetInfoWeather from './GetInfoWeather';

function App() {
  const [data, setData] = useState();

  const fetchWeather = (inputString) => {
    return fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${inputString}?unitGroup=metric&key=52ZS78E4CC67A7H84DKP85SSR&contentType=json`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));

  }

  function getData(event) {
    if (event.key === "Enter") {
      console.log(event.target.value);
      fetchWeather(event.target.value);
    }

  }

  return (
    <div className='container'>
      <h1 className='title'>REACT WEATHER APP</h1>
      <input
        className='input'
        onKeyPress={getData}
        type='text'
        placeholder='Search'
      />
      <GetInfoWeather
        item={data}
      />

    </div>
  )
}

export default App;
