import React, { useState, useEffect } from "react";

import Loading from "./Loading";
import CovidMap from "./CovidMap";
import Legend from "./Legend";

const Covid19 = () => {
  const [countries, setCountries] = useState([]);



 
  useEffect(load, []);

  return (
    <div>
      {countries.length === 0 ? (
        <Loading />
      ) : 
    </div>
  );
};

export default Covid19;
