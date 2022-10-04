import React, { useEffect, useRef, useState } from "react";

function Index() {
  const [name, setName] = useState("");

  const inputRef = useRef();
  const focus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h1>My name is {name}</h1>
      <button onClick={focus}>focus the input</button>
    </div>
  );
}

export default Index;
