import "./styles.css";
import React, { useState } from "react";
import Employee from "./Employee";
import Counter from "./Counter";
const employeeData = [
  {
    name: "fang",
    id: "abc"
  }
];

export default function App() {
  const [count, setCount] = useState(0);

  const baseEmployeeObj = {
    role: "employee",
    company: "CodeSandBox",
    location: "San Jose"
  };

  const firstEmp = { ...baseEmployeeObj, ...employeeData[0] };
  console.log(firstEmp);
  return (
    <div className="App">
      <h1>Sum of total: ${count}</h1>
      {firstEmp.id === "abc" ? (
        <>
          <Employee {...firstEmp} />
          <Counter name="Fang" count={count} setCount={setCount} />
          <Counter name="Wang" count={count} setCount={setCount} />
        </>
      ) : (
        <h2>data is not found </h2>
      )}
    </div>
  );
}
