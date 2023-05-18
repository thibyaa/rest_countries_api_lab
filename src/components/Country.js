const Country = ({country}) => {

    return ( 
        <li>{country.name.common + " " +country.flag + " "}<input type="checkbox"/></li>
     );
}
 
export default Country;