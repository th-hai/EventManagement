import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { getEventById } from "../../redux/actions/eventAction"
import {connect} from "react-redux"
import axios from "axios";
import CarouselSlider from "./CarouselSlider";
import PricingPanel from "./PricingPanel";
import Timeline from "./Timeline";
import FullyDescription from "./FullyDescription";
const EventDetail = (props) => {
    const mainContent = window.innerHeight - 200
    let { id } = useParams();
     const [event, setEvent] = useState({});
    useEffect(() => {
        axios.get('/api/events/' + id)
        .then(res => {
          setEvent(res.data);
        
        })
        .catch(error => {
          console.log(error)
        })
      }, {})

      
  return (

    <div>
        <CarouselSlider event={event} /> 
        <Timeline event={event}/>
        <FullyDescription event={event}/>
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