import React from "react";
const Ticket = () => {
  return (
    <div className="flex flex-col items-center justify-around">
      <div className="text-6xl mt-32">Get Your Ticket Now</div>
      <div className="break-normal w-1/4 mt-8">
        Bringing you super-talented individuals who have a story to tell about
        something creative they’ve worked on that made us go.
      </div>
      <a
        role="button"
        class="mt-8 bg-indigo-800 font-semibold hover:bg-gray-700 text-white text-base px-4 py-2  border rounded-full w-48 h-14 flex justify-center items-center"
      >
        Buy Tickets
      </a>
    </div>
  );
};
export default Ticket;
