import React, { useState, useEffect } from "react";
import axios from "axios";
import {useParams, useLocation} from 'react-router-dom'
import EventCard from "./EventCard";
import CategoryBar from "./CategoryBar";

const EventPage = () => {
  const [events, setEvents] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [filteredEvents, setFilteredEvents] = useState([]);
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();
  const queryString = {
    category: query.get("category")
  }
  useEffect(() => {
    axios.get('https://event-management-hcmute.herokuapp.com/api/events',
    { params: queryString },
    )
    .then(res => {
      setEvents(res.data.events);
    })
    .catch(error => {
      console.log(error)
    })
  }, [])

  useEffect(() => {
    setFilteredEvents(events.filter(event => {
      return event.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    }))
    console.table(keyword ,filteredEvents)
  }, [keyword, events])

  return (
    <div className="flex justify-around">
      {/* <div className="w-1/10"></div> */}
      <div className="flex flex-col w-4/5 items-center justify-around">
        <CategoryBar />
        <div class="w-2/3 h-16 px-3 pr-2 bg-white  rounded-full flex justify-between items-center relative my-24">
      <input
        onChange={e => {setKeyword(e.target.value)}}
        type="search"
        name="search"
        id="search"
        placeholder="Search an event..."
        class="appearance-none w-full text-2xl outline-none border-none h-full active:border-none focus:border-none rounded-full left-0 absolute"
      />
    </div>
        <div className="grid grid-cols-3 gap-12 gap-y-0 mb-16">
        
          {filteredEvents && filteredEvents.map(event => 
            <EventCard event={event}  />
            )
          }

        </div>
      </div>
    </div>
  );
};
export default EventPage;
