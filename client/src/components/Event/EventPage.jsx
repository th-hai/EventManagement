import React, { useState, useEffect } from "react";
import EventCard from "./EventCard";
import SearchBar from "./SearchBar";
import axios from "axios";

const EventPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('/events')
    .then(res => {
      setEvents(res.data.events);
    })
    .catch(error => {
      console.log(error)
    })
  }, [])

  return (
    <div className="flex justify-around">
      {/* <div className="w-1/10"></div> */}
      <div className="flex flex-col w-4/5 items-center justify-around">
        <SearchBar />
        <div className="grid grid-cols-3 gap-x-20 gap-y-0 mb-16">
          {events && events.map(event => 
            <EventCard />
            )
          }

        </div>
      </div>
      {/* <div className="w-1/10"></div> */}
    </div>
  );
};
export default EventPage;
