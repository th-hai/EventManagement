import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
const SponsorList = (props) => {
  
  const event = props.event;

  let { id } = useParams();

  let [sponsors, setSponsors] = useState([]);
  useEffect(() => {
    axios
      .get(`https://event-management-hcmute.herokuapp.com/api/events/${id}/sponsors`)
      .then((res) => {
        setSponsors(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">SPONSORS</h1>
      <div class="h-1 mx-auto bg-indigo-200 w-24 opacity-75 mt-4 rounded"></div>

    </div>
    <div className="grid grid-cols-2 gap-40 gap-y-46 pl-60 pb-20 mt-20 w-full content-center justify-items-stretch">
        {  
        sponsors.map(sponsor => (
            <Link to={`/sponsors/${sponsor._id}`}>
            <div class="h-full w-full relative cursor-pointer mb-5">
                <div class="absolute inset-0 bg-gray-100 opacity-25 rounded-lg "></div>
                <div class="absolute inset-0 transform hover:scale-125  transition duration-100">
                <div class="h-3/5 w-3/5 rounded flex items-center justify-center bg-gray-100">
                    <img className="" src={sponsor.logo}/>
                </div>
                </div>
            </div>
            </Link>
        ))}
    </div>
  </div>
    </section>
  );
};
export default SponsorList;
