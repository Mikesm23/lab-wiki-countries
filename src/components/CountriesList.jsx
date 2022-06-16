import React from 'react'
import { Link } from 'react-router-dom';
// import CountryDetails from './CountryDetails';

function CountriesList({countries}) {


  return (
    <div>
     {countries.map((elem, i) => {
          return (
            <div key={elem.alpha3Code}>
            <Link to={`/countries/${elem.alpha3Code}`}>{elem.name.common}</Link>
            </div>
          )
        })}
    </div>
  )
}

export default CountriesList
