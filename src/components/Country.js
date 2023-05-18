import { useState } from "react";
import CountriesVisited from "../containers/CountriesVisited";

const Country = ({country}) => {

    const [checked, setChecked] = useState(false);
    
    // if(checked){
    //     <CountriesVisited country={country}/>
    // }


    return ( 
        <li>
            {country.name.common + " " +country.flag + " "}
            <input 
            type="checkbox" 
            id="checkbox" 
            checked={checked}
            onChange={(e) => setChecked((prev) => !prev)}
            />
        </li>
     );
}
 
export default Country;