import React from 'react'
const SponsorsContainer = (props) => {
    const { sponsors } = props;

  return (
    // <div className="w-11/12 h-screen flex  justify-center">
   
    //   <div className="grid grid-cols-3  w-5/6  h-5/6 gap-0">
    //     {sponsors && sponsors.map((sponsor) => <Item sponsor={sponsor} />)}
    //   </div>
    // </div>
    <div class="p-10  flex items-center justify-center flex-col w-full mt-24">
      <h2 class="mb-10 text-4xl font-extrabold leading-10 tracking-tight text-left text-gray-900 sm:text-5xl sm:leading-none md:text-6xl sm:text-center">
        Official <span class="inline-block text-indigo-500 pl-4">Sponsor</span>
      </h2>
      
      
          <div className="grid grid-cols-2 gap-40 gap-y-46 pl-80 mt-20 w-full content-center justify-items-stretch">
          {sponsors && sponsors.map((sponsor) => <Item sponsor={sponsor} />)}
          </div>
      </div>
     
   
  );
};
function Item(props) {
  const { sponsor } = props;
  return (
    
       
    <div class="h-full w-full relative cursor-pointer mb-5">
    <div class="absolute inset-0 bg-gray-100 opacity-25 rounded-lg "></div>
    <div class="absolute inset-0 transform   transition duration-300">
      <div class="h-3/5 w-3/5 rounded flex items-center justify-center bg-gray-100">
        <a href={"/sponsors/" + sponsor._id}><img className="" src={sponsor.logo}/></a>
      </div>
    </div>
  </div>
        
    

  );
}
export default SponsorsContainer