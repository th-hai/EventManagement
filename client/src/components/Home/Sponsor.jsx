import React from "react";
const Sponsor = () => {
  return (
    <div className="flex flex-col w-full items-center mt-32">
      <div className="text-4xl w-3/5 pl-8">Official</div>
      <div className="text-4xl w-3/5 pl-8">Sponsors</div>

      <div className="flex flex-col w-3/5 mt-8">
        <div className="flex flex-row justify-around">
          <div>
            <img
              src="https://picsum.photos/seed/picsum/200/300"
              className="w-28 h-28 my-4 rounded-2xl"
            ></img>
          </div>
          <div>
            <img
              src="https://picsum.photos/seed/picsum/200/300"
              className="w-28 h-28 my-4 rounded-2xl"
            ></img>
          </div>
          <div>
            <img
              src="https://picsum.photos/seed/picsum/200/300"
              className="w-28 h-28 my-4 rounded-2xl"
            ></img>
          </div>
        </div>
        <div className="flex flex-row justify-around">
          <div>
            <img
              src="https://picsum.photos/seed/picsum/200/300"
              className="w-28 h-28 my-4 rounded-2xl"
            ></img>
          </div>
          <div>
            <img
              src="https://picsum.photos/seed/picsum/200/300"
              className="w-28 h-28 my-4 rounded-2xl"
            ></img>
          </div>
          <div>
            <img
              src="https://picsum.photos/seed/picsum/200/300"
              className="w-28 h-28 my-4 rounded-2xl"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sponsor;
