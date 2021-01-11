import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
const SpeakerDetail = () => {
  let { id } = useParams();
  const [speaker, setSpeaker] = useState([]);

  useEffect(() => {
    axios
      .get("https://event-management-hcmute.herokuapp.com/api/speakers/" + id)
      .then((res) => {
        setSpeaker(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const mainContent = window.innerHeight - 200;
  
  return (
    <div
      class="bg-gray-100 flex items-center h-full"
      style={{ minHeight: mainContent }}
    >
      <div class="max-w-6xl px-6 py-8 mx-auto md:px-12">
        <div class="">
          <div class="">
            <div class="overflow-hidden bg-white rounded-lg shadow-xl flex items-center">
             
                <div className="w-full  h-96 bg-cover" style={{
          backgroundImage: `url(${speaker && speaker.avatarUrl})`
        }}>

                </div>
                <div class="w-full">
                  <blockquote class="text-lg italic text-gray-800 w-full">
                    <div class="absolute -mt-2 -ml-2 pin-t pin-l">
                      <svg
                        class="w-8 h-8 ml-8"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.264 19.552C15.264 23.2 17.664 25.12 20.352 25.12C23.328 25.12 26.112 22.624 26.112 19.456C26.112 16.864 24.288 15.136 22.08 15.136C21.888 15.136 21.408 15.136 21.312 15.136C22.368 12.064 25.824 8.8 29.376 7.072L26.4 4C20.448 6.976 15.264 13.504 15.264 19.552ZM0 19.552C0 23.2 2.304 25.12 5.088 25.12C8.064 25.12 10.848 22.624 10.848 19.456C10.848 16.864 8.928 15.136 6.72 15.136C6.528 15.136 6.048 15.136 5.952 15.136C7.008 12.064 10.56 8.8 14.016 7.072L11.136 4C5.184 6.976 0 13.504 0 19.552Z"
                          class="text-gray-300 fill-current"
                        ></path>
                      </svg>
                    </div>
                    <div class="relative mt-8 ml-16 pr-8">
                      <p>{speaker.bio}</p>
                    </div>
                  </blockquote>
                  <div class="mt-10">
                    <div className="flex-col justify-center items-center"> 
                      <div class="font-semibold tracking-wider text-gray-900 uppercase flex justify-center">
                        {speaker.name}
                      </div>
                      <div class="text-gray-700 flex justify-center">{speaker.job}</div>
                    </div>
                    <div class="flex lg:flex-row md:flex-col justify-center mt-4 md:items-center">
              <a  target="_blank" href={speaker && speaker.socialNetwork && speaker.socialNetwork.facebookUrl } class="mx-2 text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <FontAwesomeIcon icon={faFacebookF} size="2x"></FontAwesomeIcon>
              </a>
              <a target="_blank" href={speaker && speaker.socialNetwork && speaker.socialNetwork.instagramUrl } class="mx-2 text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <FontAwesomeIcon icon={faInstagram} size="2x"></FontAwesomeIcon>
              </a>
              <a target="_blank" href={speaker && speaker.socialNetwork && speaker.socialNetwork.twitterUrl } class="mx-2 text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <FontAwesomeIcon icon={faTwitter} size="2x"></FontAwesomeIcon>
              </a>
            </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
   
  );
};
export default SpeakerDetail;
