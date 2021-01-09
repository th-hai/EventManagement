import React from "react";
import {Link} from "react-router-dom";
const SpeakerList = (props) => {
  
  const speakers = props.speakers;

  return (
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">SPEAKERS</h1>
      <div class="h-1 mx-auto bg-indigo-200 w-24 opacity-75 mt-4 rounded"></div>

    </div>
    <div class="flex flex-wrap -m-2">
        {  
        speakers.map(speaker => (
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <Link to={`/speakers/${speaker._id}`}>
            <div className="h-full flex hover:shadow-md hover:bg-green-100 bg-white items-center border-gray-200 border p-4 rounded-lg">
            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={speaker.avatarUrl} />
            <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">{speaker.name}</h2>
                <p className="text-gray-500">{speaker.job}</p>
            </div>
            </div>
            </Link>
            </div>
        ))}
    </div>
  </div>
    </section>
  );
};
export default SpeakerList;
