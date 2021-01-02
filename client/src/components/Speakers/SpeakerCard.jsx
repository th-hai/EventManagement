import React from "react";
const SpeakersContainer = (props) => {
  const { speakers } = props;

  return (
    <div className="w-11/12 h-screen flex  justify-center">
   
      <div className="grid grid-cols-3  w-5/6  h-5/6 gap-0">
        {speakers && speakers.map((speaker) => <Item speaker={speaker} />)}
      </div>
    </div>
  );
};
function Item(props) {
  const { speaker } = props;
  return (
    <a href={"/speakers/" + speaker._id}>
        <div
          class="bg-cover bg-center w-full h-full text-white  object-fill relative"
         style={{
            backgroundImage: `url(${speaker.avatarUrl})`,
          }}
        >
          <div className="bg-gradient-to-b from-transparent via-transparent to-black h-full">
              <div class="md:w-1/2 absolute bottom-0 pl-8">
                <p class="font-bold text-2xl uppercase">{speaker.name}</p>               
                <p class="text-2xl mb-10 leading-none">
                  Atractive designs for your brand
                </p>
              </div>
          </div>
        </div>
    </a>
  );
}
export default SpeakersContainer;
