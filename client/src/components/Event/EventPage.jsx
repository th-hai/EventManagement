import React from 'react'
import EventCard from './EventCard'
import SearchBar from './SearchBar'

const EventPage = () => {
    return (
        <div className="flex justify-center">

        
        {/* <div className="w-1/10"></div> */}
        <div className="flex flex-col w-4/5 items-center">

                <SearchBar />
            <div className="grid grid-cols-3 gap-x-20 gap-y-0 mb-8">
          <a href="#"><EventCard /></a>  
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />

            </div>
        </div>
        {/* <div className="w-1/10"></div> */}
        </div>
    )
}
export default EventPage