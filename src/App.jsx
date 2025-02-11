import { Routes, Route, Link } from "react-router-dom";
import PuppyList from "./components/PuppyList.jsx";
import SinglePuppyDetails from "./components/SinglePuppyDetails.jsx";
import { useState } from 'react';

const App = () => {
  const [singlePuppyDetails, setSinglePuppyDetails] = useState({});

  return (
    <>

      <h1>Puppybowl</h1>
      {
        singlePuppyDetails.name ?
        
          <SinglePuppyDetails
            singlePuppyDetails={singlePuppyDetails}
            setSinglePuppyDetails={setSinglePuppyDetails}
          /> :
          <PuppyList setSinglePuppyDetails={setSinglePuppyDetails} />
      }
    </>
  )
}

export default App



