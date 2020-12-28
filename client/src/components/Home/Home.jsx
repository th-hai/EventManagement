import React from "react";
import ContainerLarge from "./Container-large";
import Intro from "./Intro";
import Sponsor from "./Sponsor";
import Ticket from "./Ticket";
import Speakers from "./Speakers";

import CarouselSlider from "../Event/CarouselSlider";
function Home() {
  return (
    <div class="bg-white">
      <div className="flex flex-col justify-center items-center">
        <ContainerLarge />
        <CarouselSlider/>
        <div id="event">
          <Intro />
          {/* <HighlightEvent/> */}
        </div>

        <Speakers />
        <Sponsor />
        <Ticket />
      </div>
    </div>
  );
}
export default Home;
