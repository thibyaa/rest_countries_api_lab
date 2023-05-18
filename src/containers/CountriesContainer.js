import { useEffect, useState } from "react"
import Country from "../components/Country";
import CountriesVisited from "./CountriesVisited";

const CountriesContainer = () => {

    const [countries, setCountries] = useState(null);
    // const [visitedCountries, setVisitedCountries] = useState(null);

    const fetchCountry = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all")
        const jsonData = await response.json()
    
        setCountries(jsonData);
    }

    useEffect(()=>{
        fetchCountry();
    },[])

    const mapCountries = countries ? countries.map(country => <Country country={country}/>) : <p> Bucket List Incoming </p>
    
    // EVENT HANDLER
    const tickedCountry = countries ? countries.map((country)=>{
        if(true){
            <CountriesVisited country={country}/>
            
        }
    }) : <></>

    return ( 
        <>
            <h1> Country Bucket List </h1>
            <h4>Countries I want to visit:</h4>
            <ul id="allCountries">{mapCountries}</ul>
            <h4>Visited Countries</h4>
            {/* <ul id="visitedCountries" visitedCountries={visitedCountries}setVisitedCountries={setVisitedCountries}>{tickedCountry}</ul> */}
            {/* <CountriesVisited/> */}
        </>
     );
}
 
export default CountriesContainer;