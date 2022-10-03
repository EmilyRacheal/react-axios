import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, storeDate] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log("Getting from ::::::::", res.data);
        storeDate(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const arr = data.map((data, index) => {
    return (
      <tr>
        <td>{data.id}</td>
        <td>{data.id}</td>
        <td>{data.id}</td>
      </tr>
    );
  });

  return (
    <div className="App">
      <h1>Let's use axios with React js</h1>

      <h2>A basic HTML table</h2>

      <table>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
      </table>

      <p>
        To understand the example better, we have added borders to the table.
      </p>
    </div>
  );
}

export default App;
