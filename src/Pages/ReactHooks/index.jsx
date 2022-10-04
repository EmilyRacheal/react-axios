import React from "react";
import { useState, useEffect } from "react";

function Index() {
  //   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [resourseType, setResourceType] = useState("posts");
  //   const [items, setItems] = useState([]);

  //   const handleResize = () => {
  //     setWindowWidth(window.innerWidth);
  //   };

  //   useEffect(() => {
  //     window.addEventListener("resize", handleResize);
  //   }, []);

  useEffect(() => {
    // fetch(`https://jsonplaceholder.typicode.com/${resourseType}`)
    //   .then((response) => response.json())
    //   .then((json) => setItems(json));
    console.log("resource changed");
    console.log("return from resource change");
  }, [resourseType]);

  return (
    <div>
      {/* <h1>{windowWidth}</h1> */}

      <button onClick={() => setResourceType("posts")}>Post</button>
      <button onClick={() => setResourceType("users")}>Users</button>
      <button onClick={() => setResourceType("comments")}>comments</button>
      <h1>{resourseType}</h1>
      {/* {items.map((items) => {
        return <pre>{JSON.stringify(items)}</pre>;
      })} */}
    </div>
  );
}

export default Index;
