import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState("");
  return (
    <>
      {/* <h3>Onchange event testing</h3>
      <input
        style={{ padding: "5px" }}
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value + "test")}
      /> */}
      <h3>Test Click with button</h3>
      <button onClick={() => setData("updated data")}>Update Data</button>
      <h1>{data}</h1>
    </>
  );
}

export default App;
