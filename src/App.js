import {useState} from 'react';
import './App.css';
import countriesJSON from './countries.json';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';


function App() {

  const [countries, setCountries] = useState(countriesJSON)

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/countries' element={<CountriesList countries= {countries}/>}/>
        <Route path='/countries/:alpha3Code' element={<CountryDetails />}/>
      </Routes> 

    </div>
  );
}

export default App;
