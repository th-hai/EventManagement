import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLocationArrow,
  faDollarSign,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
const EventCard = () => {
  return (
    <div class="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4">
      <img
        class="w-full h-56 object-cover object-center"
        src="https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2860&q=80"
        alt="avatar"
      />

      <div class="py-4 px-6">
        <h1 class="text-2xl font-semibold text-gray-800">Event Name</h1>
        <p class="py-2 text-lg text-gray-700">Event Description</p>
        <div class="flex items-center mt-4 text-gray-700">
          <FontAwesomeIcon icon={faClock} />
          <h1 class="px-2 text-sm">Time</h1>
        </div>
        <div class="flex items-center mt-4 text-gray-700">
          <FontAwesomeIcon icon={faLocationArrow} />
          <h1 class="px-2 text-sm">Location</h1>
        </div>
        <div class="flex items-center mt-4 text-gray-700">
          <FontAwesomeIcon icon={faDollarSign} />
          <h1 class="px-2 text-sm">Ticket Price</h1>
        </div>
      </div>
    </div>
  );
};
export default EventCard;
