import React from 'react';
import ContainerLarge from './Container-large';
import Footer from './Footer';
import Intro from './Intro';

import Navbar from './Navbar';
import Sponsor from './Sponsor';
import Ticket from './Ticket';

function Home() {
    return (
        <div class="bg-gradient-to-br from-blue-300 via-blue-200 to-blue-100">
           
            <div className="flex flex-col justify-center items-center">
                <ContainerLarge />
                <Intro />
                <Sponsor />
                <Ticket />
            </div>

           
        </div>
    )

}
export default Home