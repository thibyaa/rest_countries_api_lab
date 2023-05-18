const CountriesVisited = ({country}) => {
    return ( 
        <>
        <li> visitedCountries? {country.name.common + " " + country.flag + " "}</li>
        </>
     );
}
 
export default CountriesVisited;