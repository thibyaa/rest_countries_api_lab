import { useEffect, useState } from "react"
import Country from "../components/Country";
import CountriesVisited from "./CountriesVisited";

const CountriesContainer = () => {

    const [countries, setCountries] = useState(null);

    const fetchCountry = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all")
        const jsonData = await response.json()
    
        setCountries(jsonData);
    }

    useEffect(()=>{
        fetchCountry();
    },[])

    // const mapCountries = countries ? countries.map(country => 
    // <li>{country.name.common + " " +country.flag + " "}<input type="checkbox"/></li>) : <p> Bucket List Incoming </p>

    const mapCountries = countries ? countries.map(country => <Country country={country}/>) : <p> Bucket List Incoming </p>
    
    return ( 
        <>
            <h1> Country Bucket List </h1>
            <CountriesVisited/>
            <h4>Countries I want to visit:</h4>
            <ul id="allCountries">{mapCountries}</ul>
        </>
     );
}
 
export default CountriesContainer;