/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [categoryData, setCategoryData] = useState([]);

  const imgbaseURL = "https://api.rarafoods.com.au/public/files";

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const res = await axios.get(
          "https://api.rarafoods.com.au/api/rarafood-category"
        );
        setCategoryData(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCategoryData();
  }, []);


  return (
    <div className="my-2 p-2 flex justify-between flex-wrap">
      {categoryData.map((category: any, id) => (
        <div
          key={id}
          className="w-[200px] h-[200px] bg-gray-100 my-2 p-4 rounded"
        >
          <div className="flex gap-3">
            <strong>{id + 1}</strong>
            <h1>{category.name}</h1>
          </div>
          <img src={`${imgbaseURL}/${category.images[0]}`} alt="" />
        </div>
      ))}
    </div>
  );
}

export default App;