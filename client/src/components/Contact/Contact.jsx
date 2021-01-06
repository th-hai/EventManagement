import React from "react";
const Contact = (props) => {
  console.log(props);
  return (
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
  );
};
export default Contact;
