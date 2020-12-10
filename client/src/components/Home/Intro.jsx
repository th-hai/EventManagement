import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Intro = () => {
  return (
    <div className="flex justify-center items-center mt-24 flex-col ">
      <div className="flex flex-row justify-center">
        <div>
          <img
            src="https://picsum.photos/id/237/200/300"
            className="w-24 h-24 rounded"
          ></img>
        </div>
        <div className="ml-16 break-normal w-3/5 text-xl font-medium">
          WiTalk is an invitation only event with a carefully curated audience.
          You are more than welcome to submit your application.
        </div>
      </div>
      <div className="flex w-3/5  justify-around mt-24">
        <div className="flex flex-col w-1/4 mt-6">
          <div className="ml-2">
            <img
              src="https://picsum.photos/seed/picsum/200/300"
              className="w-16 h-16 rounded-2xl"
            ></img>
          </div>
          <div className="flex flex-row mt-4">
            <div className="mr-8 text-2xl">1</div>
            <div className="font-semibold text-2xl">Inspiration</div>
          </div>
          <div className="break-normal">
            Hear from business and technical thought leaders about what’s
            possible with us, and how the latest data analytic technologies and
            strategies will advance your organization and your career.
          </div>
        </div>

        <div className="flex flex-col w-1/4 mt-6">
          <div className="ml-2">
            <img
              src="https://picsum.photos/seed/picsum/200/300"
              className="w-16 h-16 rounded-2xl"
            ></img>
          </div>
          <div className="flex flex-row mt-4">
            <div className="mr-8 text-2xl">1</div>
            <div className="font-semibold text-2xl">Inspiration</div>
          </div>
          <div className="break-normal">
            Hear from business and technical thought leaders about what’s
            possible with us, and how the latest data analytic technologies and
            strategies will advance your organization and your career.
          </div>
        </div>

        <div className="flex flex-col w-1/4 mt-6">
          <div className="ml-2">
            <img
              src="https://picsum.photos/seed/picsum/200/300"
              className="w-16 h-16 rounded-2xl"
            ></img>
          </div>
          <div className="flex flex-row mt-4">
            <div className="mr-8 text-2xl">1</div>
            <div className="font-semibold text-2xl">Inspiration</div>
          </div>
          <div className="break-normal">
            Hear from business and technical thought leaders about what’s
            possible with us, and how the latest data analytic technologies and
            strategies will advance your organization and your career.
          </div>
        </div>
      </div>
    </div>
  );
};
export default Intro;
