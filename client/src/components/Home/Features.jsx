import React from 'react'
const Speakers = () =>
{
    return(
        <div class="pb-1 text-center text-gray-700  bg-cover mt-20">
    
    <div class="my-8">
        <div class="max-w-xl px-4 mx-auto sm:px-6 lg:max-w-screen-xl lg:px-8">
            <div class="lg:grid lg:grid-cols-3 lg:gap-8">
                <div class="p-16 transition-all duration-150 bg-white rounded-lg shadow-xl ease hover:shadow-2xl">
                    <div
                        class="relative inline-flex items-center justify-center w-16 h-16 overflow-hidden text-white rounded-full">
                        <svg class="relative w-12 h-12 text-indigo-500" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z">
                            </path>
                        </svg>
                    </div>
                    <div class="mt-3 mb-6">
                        <h5 class="pb-2 text-xl font-bold leading-6 text-gray-600">Bookmarks</h5>
                        <p class="mt-1 text-base leading-6 text-gray-500">
                            Bookmarking feature allows you to bookmark and save any content.
                        </p>
                    </div>
                </div>
                <div
                    class="p-16 mt-10 transition-all duration-150 bg-white rounded-lg shadow-xl lg:mt-0 ease hover:shadow-2xl">
                    <div
                        class="relative inline-flex items-center justify-center w-16 h-16 overflow-hidden text-white rounded-full">
                        <svg class="relative w-12 h-12 text-indigo-500" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9">
                            </path>
                        </svg>
                    </div>
                    <div class="mt-3 mb-6">
                        <h5 class="pb-2 text-xl font-bold leading-6 text-gray-600">Notifications</h5>
                        <p class="mt-1 text-base leading-6 text-gray-500">
                            Automated notifications that will keep your team in the know.
                        </p>
                    </div>
                </div>
                <div
                    class="p-16 mt-10 transition-all duration-150 bg-white rounded-lg shadow-xl lg:mt-0 ease hover:shadow-2xl">
                    <div
                        class="relative inline-flex items-center justify-center w-16 h-16 overflow-hidden text-white rounded-full">
                        <svg class="relative w-12 h-12 text-indigo-500" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <div class="mt-3 mb-6">
                        <h5 class="pb-2 text-xl font-bold leading-6 text-gray-600">Messages</h5>
                        <p class="mt-1 text-base leading-6 text-gray-500">
                            A built-in message system to help your team communicate.
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>

    
</div>
  )
    
}
export default Speakers