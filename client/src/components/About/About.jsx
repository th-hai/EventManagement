import React from "react";
const About = () => {
  return (
    <div>
      <section class="text-black">
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium	 text-black font-mono">
             <b>HQT COMPANY</b> 
            </h1>
            <p class="leading-relaxed mb-8 font-normal">
            Bringing you super-talented individuals who have a story to tell about something creative they’ve worked on that made us go. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <p class="leading-relaxed mb-8 font-normal">
            <b>Address:</b> 1 Vo Van Ngan St, Linh Chieu Ward, Thu Duc City 
            </p>
            <p class="leading-relaxed mb-8 font-normal">
            <b>Phone:</b> +84 912 345 67 
            </p>
          </div>
        </div>
      </section>

      <section class="">
        <div class="container mx-auto flex px-10 py-8 items-center justify-center flex-col">
          <img
            class="lg:w-15/15 md:w-15/5 w-20/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="https://razorpay.com/learn-content/uploads/2019/09/register-company-online.png"
          />
        </div>
      </section>
    </div>
  );
};
export default About;
