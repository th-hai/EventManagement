import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
const Sponsor = () => {
  return (
    <section class="p-10  flex items-center justify-center flex-col w-full mt-24">
      <h2 class="mb-10 text-4xl font-extrabold leading-10 tracking-tight text-left text-gray-900 sm:text-5xl sm:leading-none md:text-6xl sm:text-center">
        Official <span class="inline-block text-indigo-500">Sponsor</span>
      </h2>
      <div className="grid grid-cols-3 gap-20 mt-20 w-4/5 justify-items-center">
          <div class="h-full w-full relative cursor-pointer mb-5">
            <div class="absolute inset-0 bg-white opacity-25 rounded-lg "></div>
            <div class="absolute inset-0 transform  hover:scale-75 transition duration-300">
              <div class="h-full w-full rounded flex items-center justify-center bg-white">
                <img src="https://mobileday.vn/wp-content/uploads/2019/05/tiktok-01.png"/>
              </div>
            </div>
          </div>
          <div class="h-32 w-32 relative cursor-pointer mb-5">
            <div class="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
            <div class="absolute inset-0 transform  hover:scale-75 transition duration-300">
              <div class="h-full w-full rounded flex items-center justify-center bg-gray-100">
                <FontAwesomeIcon
                  icon={faFacebookSquare}
                  size="9x"
                  className="bg-cover"
                ></FontAwesomeIcon>
              </div>
            </div>
          </div>
          <div class="h-32 w-32 relative cursor-pointer mb-5">
            <div class="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
            <div class="absolute inset-0 transform  hover:scale-75 transition duration-300">
              <div class="h-full w-full rounded flex items-center justify-center bg-gray-100">
                <FontAwesomeIcon
                  icon={faFacebookSquare}
                  size="9x"
                  className="bg-cover"
                ></FontAwesomeIcon>
              </div>
            </div>
          </div>
          <div class="h-32 w-32 relative cursor-pointer mb-5">
            <div class="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
            <div class="absolute inset-0 transform  hover:scale-75 transition duration-300">
              <div class="h-full w-full rounded flex items-center justify-center bg-gray-100">
                <FontAwesomeIcon
                  icon={faFacebookSquare}
                  size="9x"
                  className="bg-cover"
                ></FontAwesomeIcon>
              </div>
            </div>
          </div>
          <div class="h-32 w-32 relative cursor-pointer mb-5">
            <div class="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
            <div class="absolute inset-0 transform  hover:scale-75 transition duration-300">
              <div class="h-full w-full rounded flex items-center justify-center bg-gray-100">
                <FontAwesomeIcon
                  icon={faFacebookSquare}
                  size="9x"
                  className="bg-cover"
                ></FontAwesomeIcon>
              </div>
            </div>
          </div>
          <div class="h-32 w-32 relative cursor-pointer mb-5">
            <div class="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
            <div class="absolute inset-0 transform  hover:scale-75 transition duration-300">
              <div class="h-full w-full rounded flex items-center justify-center bg-gray-100">
                <FontAwesomeIcon
                  icon={faFacebookSquare}
                  size="9x"
                  className="bg-cover"
                ></FontAwesomeIcon>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};
export default Sponsor;
