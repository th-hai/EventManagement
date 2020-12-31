import React from 'react'
const PageNotFound = (props) => {
    const mainContent = window.innerHeight - 200
    return (

        
            <div class="  bg-gray-100 flex items-center justify-center h-full" style={{minHeight: mainContent}} >
                <div  class="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700 h-full">
                    <div class="h-full">
                        
                        {/* <div class="text-5xl font-dark font-bold">404</div> */}
                        <img src="https://img.icons8.com/fluent/256/000000/sad-cloud.png"/>
                        <p
                            class="text-2xl md:text-3xl font-light leading-normal"
                            >Sorry we couldn't find this page. </p>
                        <p class="mb-8">But dont worry, you can find plenty of other things on our homepage.</p>
    
                        <a href="/home" class="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700" >back to homepage</a>
                    </div>
    
                </div>
            </div>
       
    )
}
export default PageNotFound