import React from "react";
const Contact = (props) => {
  console.log(props);
  return (
    <div>
    <section
      class="blog text-gray-700 body-font h-full"
      style={{ minHeight: props.minHeight }}
    >
      <div class="container px-5 py-24 mx-auto h-full ">
        <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 class=" text-5xl font-medium title-font mb-2 text-gray-900">
            {" "}
            The Core Team
          </h1>
          <p class="lg:w-1/2 w-full leading-relaxed text-xl mt-8">
          Take a step back and try to observe your business offerings objectively. What are your true strengths as a planner? Then talk with friends, family, and collaborators and ask them what’s the first thing that comes to mind when they think of your business. 
          </p>
        </div>
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div class="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
            <div class="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center" style={{
            backgroundImage: `url(https://res.cloudinary.com/dmi0tdam0/image/upload/v1609905555/22104774_1305140532947773_3954474967604213685_o_prkfxx.jpg)`,
          }}>

            </div>

            <div class=" w-full bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5 h-40">
              <div class="header-content inline-flex w-full">
                <div class="category-badge  h-4 w-4 m rounded-full m-1 bg-purple-100">
                  <div class="h-2 w-2 rounded-full m-1 bg-purple-500 "></div>
                </div>
                <div class="category-title flex-1 text-sm">
                  {" "}
                  Chief Executive Officer{" "}
                </div>
              </div>
              <div class="title-post font-medium text-2xl">Lê Minh Quang</div>

              <div class="summary-post text-base mt-2">
                Irrigation Engineer<br></br>Bachelor of Economics in Foreign
                Trade
              </div>
            </div>
          </div>

          <div class="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
            <div class="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center" style={{
            backgroundImage: `url(https://res.cloudinary.com/dmi0tdam0/image/upload/v1592896324/syqnyepovbptdl9t2win.jpg)`,
          }} >
              
            </div>

            <div class=" w-full bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5 h-40">
              <div class="header-content inline-flex ">
                <div class="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-yellow-100">
                  <div class="h-2 w-2 rounded-full m-1 bg-yellow-500 "></div>
                </div>
                <div class="category-title flex-1 text-sm"> Director</div>
              </div>
              <div class="title-post font-medium text-2xl">
                Nguyễn Khắc Hoài Thương
              </div>

              <div class="summary-post text-base text-justify mt-2">
                Bachelor of Physics<br></br>Bachelor of Information
                Economics
              </div>
            </div>
          </div>

          <div class="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
            <div class="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center" style={{
            backgroundImage: `url(https://res.cloudinary.com/dmi0tdam0/image/upload/v1609905555/101294854_1601240256721059_2645892457849421824_o_1_xwlez4.jpg)`,
          }}></div>

            <div class=" w-full bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5 h-40">
              <div class="header-content inline-flex ">
                <div class="category-badge  h-4 w-4 m rounded-full m-1 bg-green-100">
                  <div class="h-2 w-2 rounded-full m-1 bg-green-500 "></div>
                </div>
                <div class="category-title flex-1 text-sm"> Vice Director</div>
              </div>
              <div class="title-post font-medium text-2xl">Nguyễn Thanh Hải</div>

              <div class="summary-post text-base text-justify mt-2">
              Bachelor of Information Economics
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="text-gray-600 body-font relative">
      <div className="absolute inset-0 bg-gray-300">
        <iframe width="100%" height="100%" frameBorder={0} marginHeight={0} marginWidth={0} title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4970767579753!2d106.76939931446832!3d10.849746760803647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175270ad28d48ab%3A0xa6c02de0a7c40d6c!2zVHLGsOG7nW5nIMSQ4bqhaSBI4buNYyBTxrAgUGjhuqFtIEvhu7kgVGh14bqtdCBUcC5IQ00!5e0!3m2!1svi!2s!4v1609996729664!5m2!1svi!2s" style={{filter: 'grayscale(1) contrast(1.2) opacity(0.4)'}} />
      </div>
      <div className="container px-5 py-24 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact Us</h2>
          <p className="leading-relaxed mb-5 text-gray-600">Stay connected</p>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
            <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" defaultValue={""} />
          </div>
          <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send</button>
          <p className="text-xs text-gray-500 mt-3">We will response as soon as possible.</p>
        </div>
      </div>
    </section>

  </div>
  
  );
};
export default Contact;
