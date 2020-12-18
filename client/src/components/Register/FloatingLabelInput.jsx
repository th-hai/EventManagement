import React from 'react'

function FloatingLabelInput({ type, name, children }) {
    const [active, setActive] = React.useState(false);

    function handleActivation(e) {
        setActive(!!e.target.value);
    }

    return (
        <div className="relative border rounded-md text-gray-600 bg-white mb-4 border-black border-opacity-25  focus:outline-none h-16 flex items-center justify-center ">
      <input
        className={[
          "outline-none w-full h-full rounded bg-transparent text-base transition-all duration-200 ease-in-out pl-2 focus:ring-2 focus:ring-blue-500 focus:  pt-4", // nội dung ra giữa trước đi cái input cũng ko ra giữa dc
        active ? "text-xl pl-2" : "text-base"].join(" ")}
        id={name}
        name={name}
        type={type}
        onChange={handleActivation}
      />
      <label
        className={[
          "absolute w-full h-full top-0 left-0 flex text-gray-600 text-opacity-75 transition-all duration-200 ease-in-out mb-4 flex items-center pl-2 pt-3", //absoblue có ap dụng như flex k? hok a, align này của flex hay sao align này e thêm đại chứ k effect dc
          active ? "text-sm pb-14 pt-1" : "text-xl"
        ].join(" ")}
        htmlFor={name}
      >
        {children}
      </label>
    </div>
    );
}
export default FloatingLabelInput
   