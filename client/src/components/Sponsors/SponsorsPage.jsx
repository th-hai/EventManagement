
import React, { useState, useEffect } from "react";
import axios from "axios";
import SponsorsContainer from './SponsorsContainer';
import Sponsor from "../Home/Sponsor";
const SponsorsPage = () => {
    const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    axios
      .get("/api/sponsors")
      .then((res) => {
        setSponsors(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
    return(

     <SponsorsContainer sponsors={sponsors}/>
     
    
    )
}
export default SponsorsPage