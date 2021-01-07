import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Selector from 'react-select'
import axios from "axios";

const SearchBar = () => {

  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  
  useEffect(() => {
    axios.get('/api/categories')
    .then(res => {
      setCategories(res.data.categories.map(category => ({value: category._id, label: category.name})));
    })
    .catch(error => {
      console.log(error)
    })
  }, [])

  const handleChangeCategories = async e => {
    // setSelectedCategories(e.map(category => category.value))
    console.log(e)
  }
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
      <div className="border-l-2 border-gray-500 h-1/3 flex items-center justify-center mx-4"></div>
      {/* <Selector id="categories" name="categories" onChange={handleChangeCategories} x-model="image_type" className="text-xl outline-none focus:outline-none bg-transparent border-none rounded-full h-full absolute right-0" options={categories} /> */}
      
      <select
        name=""
        id=""
        x-model="image_type"
        class="text-xl outline-none focus:outline-none bg-transparent border-none rounded-full h-full absolute right-0"
      >
        <option value="all" selected>
          All
        </option>
        <option value="photo">Photo</option>
        <option value="illustration">Illustration</option>
        <option value="vector">Vector</option>
      </select>
    </div>
  );
};
export default SearchBar;
