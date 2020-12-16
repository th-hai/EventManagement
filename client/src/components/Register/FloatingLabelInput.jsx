import React from 'react'

function FloatingLabelInput({ type, name, children }) {
    const [active, setActive] = React.useState(false);

    function handleActivation(e) {
        setActive(!!e.target.value);
    }

    return (
        <div className="relative border rounded-md text-gray-600 bg-white mb-4 border-black border-opacity-25  focus:outline-none ">
      <input
        className={[
          "outline-none w-full rounded bg-transparent text-base transition-all duration-200 ease-in-out p-2  focus:ring-2 focus:ring-blue-500 text-lg",
          active ? "pt-8" : ""
        ].join(" ")}
        id={name}
        name={name}
        type={type}
        onChange={handleActivation}
      />
      <label
        className={[
          "absolute top-0 left-0 flex items-center text-gray-600 text-opacity-75 p-2 transition-all duration-200 ease-in-out mb-4",
          active ? "text-sm" : "text-lg"
        ].join(" ")}
        htmlFor={name}
      >
        {children}
      </label>
    </div>
    );
}
export default FloatingLabelInput
   