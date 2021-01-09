import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Selector from 'react-select'
import axios from "axios";

const SearchBar = () => {

  return (
    
    <div class="w-2/3 h-16 pl-3 pr-2 bg-white  rounded-full flex justify-between items-center relative my-24">
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search an event..."
        class="appearance-none w-full text-2xl pl-8 outline-none border-none h-full active:border-none focus:border-none rounded-full left-0 absolute"
      />
      <button
        type="submit"
        class="ml-1 outline-none focus:outline-none active:outline-none "
      >
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          class="w-6 h-full absolute right-40 flex items-center top-0"
        >
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </button>
    
    </div>
  );
};
export default SearchBar;
