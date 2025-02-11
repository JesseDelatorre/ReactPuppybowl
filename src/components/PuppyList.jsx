import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import SinglePuppyDetails from "./SinglePuppyDetails";


const PuppyDetails = (props) => {

  const [allPuppies, setAllPuppies] = useState([]);

  useEffect(() => {

    const getPuppies = async () => {
      const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2501-ftb-et-web-ft/players')
      const jsonObject = await response.json();
      const retrievedPuppies = jsonObject.data.players
      setAllPuppies(retrievedPuppies);
      console.log(retrievedPuppies)
    }
    getPuppies();
  }, []);

const getPuppyDetails = async (puppyDetails) => {
    const resp = await fetch(puppyDetails);
    const retrievedPuppyDetails = await resp.json();
    props.setAllPuppies(retrievedPuppyDetails);
  }

  return (
<>
    <ol>
      {
        allPuppies.map(({ name }) => {

          return (
            <li
            onClick={() => { getPuppyDetails(name) }}
            >             
            {name}
            </li>
          )
        })
      }
    </ol>

</>
  )
}

export default PuppyDetails