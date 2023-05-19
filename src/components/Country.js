import { useState } from "react";

const Country = ({country, setVisitedCountries, visitedCountries}) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
    if(visitedCountries) setVisitedCountries([...visitedCountries, country]);
  };
  
const checkedStatus = () => {
    if(checked){
        if(visitedCountries) setVisitedCountries([...visitedCountries, country]);
    }
}
checkedStatus();

  return (
    <div>
      {!checked && (
        <li>
          {country.name.common + " " + country.flag + " "}
          <input
            type="checkbox"
            id="checkbox"
            checked={checked}
            onChange={handleChange}
          />
        </li>
      )}
    </div>
  );
};

export default Country;
