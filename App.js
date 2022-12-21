import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import React, { setState } from "react";
function App() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/eunit99/repos`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // setState(data);
        setOrders(data);
      });
  }, []);
  return (
    <div className="App">
      <tbody>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Last Name</th>
        </tr>
        {orders.map((item, i) => (
          <tr key={i}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.full_name}</td>
          </tr>
        ))}
      </tbody>
      ;
    </div>
  );
}

export default App;
