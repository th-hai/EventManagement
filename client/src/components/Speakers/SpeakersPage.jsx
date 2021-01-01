import React, { useState, useEffect } from "react";
import axios from "axios";
import SpeakersContainer from "./SpeakerCard";
import SpeakersBanner from "./SpeakersBanner";
import { Link, animateScroll as scroll , Element} from "react-scroll"
const SpeakersPage = () => {
  const [speakers, setSpeakers] = useState([]);

  useEffect(() => {
    axios
      .get("/api/speakers")
      .then((res) => {
        setSpeakers(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="">
    <div className="h-screen ">
      <div
        class="flex items-center justify-center p-5 bg-gray-100 bg-cover bg-center  h-1/2"
        style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1564585222527-c2777a5bc6cb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2850&q=80)`,
      }}
      >
        <div class="relative flex flex-col items-center w-full max-w-6xl px-4 py-8 mx-auto text-center rounded-lg shadow-2xl lg:text-left lg:block bg-gradient-to-br from-purple-600 via-indigo-500 to-teal-400 sm:px-6 md:pb-0 md:pt-12 lg:px-12 lg:py-12 ">
          <h2 class="my-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:my-0 xl:text-4xl sm:leading-tight">
            Infastructure that is{" "}
            <span class="block text-indigo-200 xl:inline">
              out of this worlnd
            </span>
          </h2>
          <p class="mt-1 mb-10 text-sm font-medium text-indigo-200 uppercase xl:text-base xl:tracking-wider lg:mb-0">
            Pushing the envelope for being awesome!
          </p>
          <div class="flex mb-8 lg:mt-6 lg:mb-0">
            <div class="inline-flex">
              <a
                href="#"
                class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-indigo-700 transition duration-150 ease-in-out bg-indigo-100 border border-transparent rounded-md hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline focus:border-indigo-300"
              >
                All Speakers
              </a>
              <Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={1000}>Test 2</Link>
            </div>
          </div>
          <div class="bottom-0 right-0 mb-0 mr-3 lg:absolute lg:-mb-12">
            <img
              src="https://cdn.devdojo.com/images/september2020/cta-1.png"
              class="max-w-xs mb-4 opacity-75 md:max-w-2xl lg:max-w-lg xl:mb-0 xl:max-w-md"
            />
          </div>
        </div>
      </div>
    </div>
      <div className="justify-center flex " id="test1">
      
      <SpeakersContainer speakers={speakers}  />
      </div>
      
    </div>
  );
};

export default SpeakersPage;
