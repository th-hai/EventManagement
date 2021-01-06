import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleArrows, faGamepad, faFutbol } from "@fortawesome/free-solid-svg-icons";
const Banner = () => {
  return (
    // <!-- component -->

    <div className="mb-40 w-11/12">
      <div
        class="bannerFondo bg-green-800	bg-center bg-auto bg-repeat-x h-96 rounded"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1564585222527-c2777a5bc6cb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2850&q=80)`
        }}
      ></div>

      <div class="-mt-32 ">
        <div class="w-full text-center -mt-24">
          <p class="text-sm tracking-widest text-white">Life’s a party</p>
          <h1 class="font-bold text-5xl text-white">TAILS</h1>
        </div>

        <div class="grid grid-cols-1 gap-4 sm:grid-cols-3 ml-24">
          <div class="p-2 sm:p-10 text-center cursor-pointer">
            <div class="py-16 max-w-sm rounded overflow-hidden shadow-lg  transition duration-500  bg-transparent">
              <div class="space-y-10">
                <FontAwesomeIcon icon={faPeopleArrows} size="5x" color="tomato" />

                <div class="px-6 py-4">
                  <div class="space-y-5">
                    <div class="font-bold text-4xl mb-2 uppercase">
                      Great People
                    </div>
                    <p class="text-gray-700 text-base">
                      Meet great people around the world
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="p-2 sm:p-10 text-center cursor-pointer">
            <div class="py-16 max-w-sm rounded overflow-hidden shadow-lg transition duration-500  bg-transparent">
              <div class="space-y-10">
                <FontAwesomeIcon icon={faGamepad} size="5x" color="tomato" />

                <div class="px-6 py-4">
                  <div class="space-y-5">
                    <div class="font-bold text-4xl mb-2 uppercase">
                      Have fun
                    </div>
                    <p class="text-gray-700 text-base">
                      Enjoy the party
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="p-2 sm:p-10 text-center cursor-pointer translate-x-2">
            <div class="py-16 max-w-sm rounded overflow-hidden shadow-lg transition duration-500 bg-transparent ">
              <div class="space-y-10">
                <FontAwesomeIcon icon={faFutbol} size="5x" color="tomato" />

                <div class="px-6 py-4">
                  <div class="space-y-5">
                    <div class="font-bold text-4xl uppercase mb-2">
                      Awesome Events
                    </div>
                    <p class="text-gray-700 text-base">All you need is here</p>
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
export default Banner;
