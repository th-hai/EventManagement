import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
const Timeline = (props) => {
    let { id } = useParams();
    const {event} = props
    const date = new Date(event.startTime)

  return (
    // <!-- component -->
    <div className="flex justify-center">
        <div class="lg:flex w-1/2 justify-center mb-10 shadow-lg">
          <div class="bg-blue-600 rounded-lg lg:w-2/12 py-4 block h-full shadow-inner">
            <div class="text-center tracking-wide">
              <div class="text-white font-bold text-4xl ">{date.getDate()}</div>
              <div class="text-white font-normal text-2xl">{date.toLocaleString('default', { month: 'long' })}</div>
            </div>
          </div>
          <div class="w-full  lg:w-11/12 xl:w-full px-1 bg-white py-5 lg:px-2 lg:py-2 tracking-wide border-b-1 ">
            {/* <div class="flex flex-row lg:justify-start justify-center">
              <div class="text-gray-700 font-medium text-sm text-center lg:text-left px-2">
                <i class="far fa-clock"></i> 1:30 PM
              </div>
              <div class="text-gray-700 font-medium text-sm text-center lg:text-left px-2">
                Organiser : IHC
              </div>
            </div> */}
            <div class="font-semibold text-gray-800 text-xl text-center lg:text-left px-2">
              {event.name}
            </div>
    
            <div class="text-gray-600 font-medium text-sm pt-1 text-center lg:text-left px-2">
              {event.location}
            </div>

            <div class="text-gray-600 font-medium text-sm pt-1 text-center lg:text-left px-2">
          {date.toLocaleTimeString()}
        </div>
          </div>
         
        </div>
    </div>
  );
};
export default Timeline;
