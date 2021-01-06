import React from "react";
const FullyDescription = (props) => {
  const { event } = props;

  return (
    // <!-- component -->
    <div class=" mx-auto w-1/2 bg-white rounded">
      <div class="">
        <div class="max-w-md mx-auto xl:max-w-5xl lg:max-w-5xl md:max-w-2xl max-h-screen shadow-2xl flex-row  relative">
          <div class="p-2   text-blue-900 rounded-t">
            <h5 class="text-black text-2xl capitalize"></h5>
          </div>
          <div class="p-2 w-full h-full overflow-y-auto text-black p-10">
            <p class="text-justify py-2">
             {event.description ? event.description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FullyDescription