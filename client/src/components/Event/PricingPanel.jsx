import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const PricingPanel = (props) => {
  const { event } = props;
  let { id } = useParams();

  let [tickets, setTickets] = useState([]);
  useEffect(() => {
    axios
      .get(`/api/events/${id}/tickets`)
      .then((res) => {
        setTickets(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function Ticket(props) {
    return (
      <div class="p-4 md:w-1/3">
        <div class="h-full hover:shadow-md hover:bg-green-100 bg-white border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <div class="p-6">
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{props.ticket.type}</h1>
            <p class="leading-relaxed mb-3">{props.ticket.detail}</p>
            <div class="flex items-center flex-wrap ">
              <button class="inline-flex text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded">Add To Cart</button>
              <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg class="w-5 h-5 mt-2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
                </svg>{props.ticket.quantity}
              </span>
              <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg class="w-6 h-5 mr-1 mt-2" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
  <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z"/>
                </svg>{props.ticket.price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    // <!-- component -->
    <section>
      <div class="container max-w-full mx-auto p-6">
        <h1 class="text-center text-4xl text-black font-medium leading-snug tracking-wider">
          TICKETS
        </h1>

        <div class="h-1 mx-auto bg-indigo-200 w-24 opacity-75 mt-4 rounded"></div>
       
        <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
            {
              tickets.map(ticket => <Ticket ticket={ticket} />)
            }
        </div>
        </div>
      </div>
    </section>
  );
};
export default PricingPanel;
