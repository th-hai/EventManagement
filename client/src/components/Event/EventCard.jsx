import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationArrow,
  faClock,
  faTicketAlt,
  faTag,
  faPeopleCarry
} from "@fortawesome/free-solid-svg-icons";
const EventCard = (props) => {
  const [event, setEvent] = useState(props.event)
  const date = new Date(event.startTime)
  return (
    <a class="lg:col-span-1 md:col-span-3	sm:col-span-3" href={"events/" + event._id}>
      <div class="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4">
        <img
          class="w-full max-h-56 object-cover object-center"
          src={event && event.thumbnail ? event.thumbnail : 'https://via.placeholder.com/150/FFFFFF/FFFFFF'}
          alt="avatar"
        />
        { }
        <div class="py-4 px-6 min-h-72">
          <h1 class="text-2xl font-semibold text-gray-800">{event ? event.name : ''}</h1>
          <p class="py-2 max-h-16 overflow-hidden text-lg text-gray-700">{event ? event.description : ''}</p>
          <div class="flex items-center mt-4 text-gray-700">
            <FontAwesomeIcon icon={faClock} />
            <h1 class="px-2 text-sm">{event ? date.toLocaleString() : ''}</h1>
          </div>
          <div class="flex items-center mt-4 text-gray-700">
            <FontAwesomeIcon icon={faLocationArrow} />
            <h1 class="px-2 text-sm">{event ? event.address : ''}</h1>
          </div>
          <div class="flex items-center mt-4 text-gray-700">
            <FontAwesomeIcon icon={faTicketAlt} />
            <h1 class="px-2 text-sm">{event ? event.type : ''}</h1>
          </div>
          
        </div>
      </div>
    </a>
  );
};
export default EventCard;
