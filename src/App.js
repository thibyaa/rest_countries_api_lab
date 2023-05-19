import { useEffect, useState } from "react";
import "./App.css";
import CountriesContainer from "./containers/CountriesContainer";
import CountriesVisitedContainer from "./containers/CountriesVisitedContainer";

function App() {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);

  useEffect(() => {
    const fetchCountry = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const jsonData = await response.json();
    
        setCountries(jsonData);
      };
      
      fetchCountry();
  }, []);

  // const handleChange = (country) => {
  //   if(visitedCountries) setVisitedCountries([...visitedCountries, country]);
  // };

  return (
    <>
      <h1> Country Bucket List </h1>
      <CountriesContainer countries={countries} visitedCountries={visitedCountries} setVisitedCountries={setVisitedCountries}/>
      {/* <CountriesContainer countries={countries} visitedCountries={visitedCountries} setVisitedCountries={setVisitedCountries} handleChange={handleChange}/> */}
      <CountriesVisitedContainer visitedCountries={visitedCountries}/>
    </>
  );
}

export default App;