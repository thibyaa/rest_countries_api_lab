import Country from "../components/Country";

const CountriesContainer = ({countries}) => {

    const mapCountries = countries ? (countries.map(country => <Country country={country}/>)) : (<p> Bucket List Incoming </p>);

  return (
    <>
    <h4>Countries I want to visit:</h4>
    <ul id="allCountries">{mapCountries}</ul>
    </>
  );
};

export default CountriesContainer;