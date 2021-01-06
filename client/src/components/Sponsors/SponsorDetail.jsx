import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
const SponsorDetail = () => {
    let { id } = useParams();
    console.log(id)
  const [sponsor, setSponsor] = useState({});

  useEffect(() => {
    axios
      .get("/api/sponsors/" + id)
      .then((res) => {
        setSponsor(res.data);
           console.log(res)
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, {});
    return (
// <!-- component -->
// <!-- Subscribe component -->

    
<div className="flex items-center h-screen bg-white">
    <section class="text-gray-700 body-font flex md:flex-row flex-col items-center  mx-24 rounded">
            <div
                class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center pr-48">
                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{sponsor.name}</h1>
                <p class="mb-8 text-xl leading-relaxed">{sponsor.description}</p>
               
                
               
            </div>
            <div class="md:w-1/2 w-5/6">
                <img class="object-cover object-center" alt="hero"
                    src={sponsor.logo}/>
            </div>
    
        </section>
</div>

    )
    }
export default SponsorDetail