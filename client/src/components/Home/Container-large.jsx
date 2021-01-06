import React from 'react';

const ContainerLarge = () => {
    return (
        <div class="flex my-20 h-full w-11/12  mx-auto mb-40">
    <div class="w-1/2 h-full">
        <div class="flex flex-col overflow-hidden rounded-lg shadow-2xl">
            <div class="flex items-center h-8 text-white bg-gray-900">
                <div class="w-3 h-3 ml-3 bg-red-400 rounded-full"></div>
                <div class="w-3 h-3 ml-2 bg-yellow-400 rounded-full"></div>
                <div class="w-3 h-3 ml-2 bg-green-400 rounded-full"></div>
            </div>
            <img src="https://images.unsplash.com/photo-1544815633-1a8065078285?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
                alt="A wooden table that has some accessories on it." class="object-cover w-full h-full"/>
        </div>
    </div>
    <div class="relative w-1/2 h-full pl-12">
        <p class="text-sm font-bold tracking-wide text-indigo-500 uppercase">Awesome Events</p>
        <h2 class="mt-5 text-4xl font-bold leading-tight text-gray-900">Awesome Events<br/> for Everyone to Enjoy.</h2>
        <p class="mt-3 text-base text-gray-600">We have compiled a list of some of the catchiest event planning slogans and tag lines ever thought up. After the slogans, you will then see the Greatest Event Planning Company Names of All-Time and our special edition post that reveals the Perfect Slogan Formula.</p>
        <a href="/events"
            class="flex items-center inline-block mt-8 font-medium text-indigo-500 underline">
            <span>View All Events</span>
            <svg class="w-4 h-4 mt-1 ml-1 transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3">
                </path>
            </svg>
        </a>
    </div>
</div>
    )
}
export default ContainerLarge