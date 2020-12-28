import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationArrow,
  faDollarSign,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
const EventCard = (props) => {
  const [event,setEvent] = useState(props.event)

  return (
    <a href={"events/"+ event._id}>
      <div class="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4">
        <img
          class="w-full h-56 object-cover object-center"
          src={event && event.thumbnail ? event.thumbnail : 'https://via.placeholder.com/150/FFFFFF/FFFFFF'}
          alt="avatar"
        /> 
        { }
        <div class="py-4 px-6">
          <h1 class="text-2xl font-semibold text-gray-800">{event ? event.name : ''}</h1>
          <p class="py-2 text-lg text-gray-700">{event ? event.description : ''}</p>
          <div class="flex items-center mt-4 text-gray-700">
            <FontAwesomeIcon icon={faClock} />
            <h1 class="px-2 text-sm">{event ? event.startTime : ''}</h1>
          </div>
          <div class="flex items-center mt-4 text-gray-700">
            <FontAwesomeIcon icon={faLocationArrow} />
            <h1 class="px-2 text-sm">{event ? event.location : ''}</h1>
          </div>
          <div class="flex items-center mt-4 text-gray-700">
            <FontAwesomeIcon icon={faDollarSign} />
            <h1 class="px-2 text-sm">{event ? event.type : ''}</h1>
          </div>
        </div>
      </div>
    </a>
  );
};
export default EventCard;
