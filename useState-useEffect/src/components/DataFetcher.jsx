import React, { useEffect, useState } from "react";
function DataFetcher() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);
  //it will run only on 1st render

  return (
    <div>
      {loading ? ( //here loading is true
        <h1>Loading...</h1>
      ) : (
        <ul>
          //this will executes once loading is false
          {data.map((priyanka) => (
            <li key={priyanka.id}>{priyanka.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default DataFetcher;
