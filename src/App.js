import { useEffect, useState } from "react";
import "./App.css";
import CountriesContainer from "./containers/CountriesContainer";
import CountriesVisitedContainer from "./containers/CountriesVisitedContainer";

function App() {
  const [countries, setCountries] = useState(null);
  const [visitedCountries, setVisitedCountries] = useState([]);

  useEffect(() => {
    const fetchCountry = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const jsonData = await response.json();
    
        setCountries(jsonData);
      };
      
      fetchCountry();
  }, []);

  return (
    <>
      <h1> Country Bucket List </h1>
      <CountriesContainer countries={countries}/>
      <CountriesVisitedContainer visitedCountries={visitedCountries} setVisitedCountries={setVisitedCountries}/>
    </>
  );
}

export default App;
