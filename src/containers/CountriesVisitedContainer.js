// import Country from "../components/Country";
import Country from "../components/Country";

const CountriesVisitedContainer = ({visitedCountries, setVisitedCountries}) => {

  const mapVisitedCountries = visitedCountries.map(country => {
  <Country country={country} visitedCountries={visitedCountries} setVisitedCountries={setVisitedCountries} /> 
})

  return (
    <>
      <h4>Visited Countries: </h4>
      <ul id="visitedCountries">{mapVisitedCountries}</ul>
    </>
  );
};

export default CountriesVisitedContainer;