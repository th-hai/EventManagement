import React from "react";
const About = () => {
  return (
    <div>
      <section class="text-black">
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium	 text-black font-mono">
              HQT Company{" "}
            </h1>
            <p class="leading-relaxed mb-8 font-normal">
              145B Linh Trung street, Linh Trung ward, Thu Duc district, HCMC
            </p>
            
          </div>
        </div>
      </section>

      <section class="">
        <div class="container mx-auto flex px-10 py-8 items-center justify-center flex-col">
          <img
            class="lg:w-15/15 md:w-15/5 w-20/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="https://images.unsplash.com/photo-1522158637959-30385a09e0da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
          />
        </div>
      </section>
    </div>
  );
};
export default About;
