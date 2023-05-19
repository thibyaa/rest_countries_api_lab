// import Country from "../components/Country";
import Country from "../components/Country";

const CountriesVisitedContainer = ({visitedCountries}) => {

  const mapVisitedCountries = visitedCountries.map(country => <Country country={country}/>)

  return (
    <>
      <h4>Visited Countries: </h4>
      <ul id="visitedCountries">{mapVisitedCountries}</ul>
    </>
  );
};

export default CountriesVisitedContainer;