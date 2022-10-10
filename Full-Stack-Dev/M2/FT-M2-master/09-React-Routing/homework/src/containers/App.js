import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import About from '../components/About';
import Ciudad from '../components/Ciudad';

const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }
  return (
    <div className="App">
      {/* BARRA NAVEGADORA */}
      <Route
        path='/'
        render={() => <Nav onSearch={onSearch}/>}
      />
      
      {/* RUTA HOME */}
      <Route
        exact
        path='/'
        render={() => {return(
          <Cards
            cities={cities}
            onClose={onClose}
          />
        )}}
      />
      
      {/* RUTA ABOUT */}
      <Route 
        path='/about'
        component={About}
      />

      {/* RUTA CIUDAD */}
      <Route 
        exact
        path='/ciudad/:id'
        render={ ({match}) => {
          return(
            <Ciudad 
              city={onFilter(match.params.id)}
            />
          )
        }}
      />
      <hr />
    </div>
  );
}

export default App;
