import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";
import CarouselSlider from "./CarouselSlider";
import PricingPanel from "./PricingPanel";
import Timeline from "./Timeline";
import FullyDescription from "./FullyDescription";
import SpeakerList from "./SpeakerList";
const EventDetail = (props) => {
    const mainContent = window.innerHeight - 200
    let { id } = useParams();
    const [event, setEvent] = useState({});
    const [categories, setCategories] = useState([]);
    const [speakers, setSpeakers] = useState([]);

    useEffect(() => {
        axios.get('/api/events/' + id)
        .then(res => {
          setEvent(res.data);
        
        })
        .catch(error => {
          console.log(error)
        })
      }, {})
    
    useEffect(() => {
        axios.get('/api/events/' + id +'/categories')
        .then(res => {
          setCategories(res.data);
        })
        .catch(error => {
          console.log(error)
        })
      }, {})

      useEffect(() => {
        axios.get('/api/events/' + id +'/speakers')
        .then(res => {
          setSpeakers(res.data);
        })
        .catch(error => {
          console.log(error)
        })
      }, {})
      
  return (

    <div>
        <CarouselSlider event={event} /> 
        <div className="text-center mb-5">
        {categories ? categories.map(c => <span className="w-full mr-2 text-center px-4 py-2  text-base rounded-full text-red-600  bg-red-200">{c.name}
          </span>) : null}
        </div>
        
        <Timeline event={event}/>
        <FullyDescription event={event}/>
        <SpeakerList speakers={speakers} />
        <PricingPanel event={event}/>
    </div>
  );
};

// const mapStateToProps = state => ({
//     event: state.event.event
// })

// const mapDispatchToProps = dispatch => ({
//     getEvent : (id) => dispatch(getEventById(id))
// })
// export default connect(mapStateToProps, mapDispatchToProps)(EventDetail);
export default EventDetail