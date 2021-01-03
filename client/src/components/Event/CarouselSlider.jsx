import React, { useEffect, useState } from "react";
import axios from "axios";
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@material-ui/core'
const CarouselSlider = (props) => {
    const { event } = props

    return(
        <Carousel className="w-9/12 h-full mb-40 mx-auto mt-40" indicators={true} navButtonsAlwaysInvisible={true}>
        {
            event && event.imageUrl && event.imageUrl.map( (image, i) => <Item key={i} image={image} event={event} /> )
        }
    </Carousel>
    )
}
function Item(props)
{
    return (
        <Paper className="container mx-auto">
            <div id="slider-1" class="container">
                <div class=" bg-center  bg-cover text-white py-36  px-10 object-fill" style={{
                backgroundImage: `url(${props.image})`
              }}>
                <div class="md:w-1/2  pl-24">
                    <p class="font-bold text-xl uppercase ">{props.event.type}</p>
                    <p class="text-5xl font-bold">{props.event.name}</p>
                    <p class="text-3xl mb-10 leading-none">{props.event.description}</p>
                    <a href="#" class="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800">Buy ticket now</a>
                </div>
       
            
            </div>
            </div>
        </Paper>
    )
}
export default CarouselSlider

