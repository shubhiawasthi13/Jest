import React, { useState } from "react";
import handleAnothertData from "./helper";

function FunPage() {
  const [data, setData] = useState("");
  const handleData = () => {
    setData("hello");
  };
  return (
    <div>
      <h1>Functional Component method testing</h1>
      <button data-testid="btn1" onClick={handleData}>
        Update
      </button>
      <button onClick={handleAnothertData}>Print</button>
      <h2>{data}</h2>
    </div>
    
  );
}

export default FunPage;
