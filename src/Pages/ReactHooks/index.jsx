import React from "react";
import { useState, useEffect } from "react";

function Index() {
  const [resourseType, setResourceType] = useState("posts");
  return (
    <div>
      <button onClick={() => setResourceType("posts")}>Post</button>
      <button onClick={() => setResourceType("users")}>Users</button>
      <button onClick={() => setResourceType("comments")}>comments</button>
      <h1>{resourseType}</h1>
    </div>
  );
}

export default Index;
