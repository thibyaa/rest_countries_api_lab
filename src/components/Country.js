import { useState } from "react";

const Country = ({country, setVisitedCountries, visitedCountries}) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
    if(visitedCountries) setVisitedCountries([...visitedCountries, country]);
  };

  return (
    <div>
      {!checked && (
        <li>
          {country.name.common + " " + country.flag + " "}
          <input
            type="checkbox"
            id="checkbox"
            checked={checked}
            // onChange={() => {
            //     setChecked((prev) => !prev);
            //     handleChange(country);
            // }}
            onChange={handleChange}
          />
        </li>
      )}
    </div>
  );
};

export default Country;
