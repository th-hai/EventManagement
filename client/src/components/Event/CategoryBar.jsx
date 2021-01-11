import React, {useState, useEffect} from "react";
import axios from "axios";
const CategoryBar = () => {
  
  let [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get(`https://event-management-hcmute.herokuapp.com/api/categories`)
      .then((res) => {
        setCategories(res.data.categories);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div class="bg-white w-screen pt-2">
     <div class="-mb-px flex justify-center">
         {categories.map(category => (
             
             <a href={`?category=${category._id}`}  class="no-underline border-b-2 hover:text-blue-500 hover:border-blue-500 uppercase tracking-wide font-bold text-xs py-3 mr-8">
             {category.name}
            </a>
            // </Link>
         ))}
     </div>
    </div>
  );
};
export default CategoryBar;
