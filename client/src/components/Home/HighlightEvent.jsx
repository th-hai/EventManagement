import React from "react";
import EventCard from "../Event/EventCard";

const HighlightEvent = () => {
  return (
    <div className="flex flex-col items-center mt-16" >
      <div className="relative flex flex-col w-4/5 items-center justify-around">
        <div className="grid grid-cols-3 gap-x-20 gap-y-0 mb-8">
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
        <a href="/security-awareness-training-topics/"
            class="flex items-center inline-block font-medium text-indigo-500 underline absolute right-0 bottom-0">
            <span>Find more event...</span>
            <svg class="w-4 h-4 mt-1 ml-1 transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3">
                </path>
            </svg>
        </a>
      </div>
      
      
    </div>
  );
};
export default HighlightEvent;
