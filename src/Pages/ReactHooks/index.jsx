import React from "react";
import { useState, useEffect } from "react";

function Index() {
  const [resourseType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourseType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourseType]);

  return (
    <div>
      <button onClick={() => setResourceType("posts")}>Post</button>
      <button onClick={() => setResourceType("users")}>Users</button>
      <button onClick={() => setResourceType("comments")}>comments</button>
      <h1>{resourseType}</h1>
      {items.map((items) => {
        return <pre>{JSON.stringify(items)}</pre>;
      })}
    </div>
  );
}

export default Index;
