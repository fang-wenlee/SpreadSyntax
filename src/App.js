import "./styles.css";
import Employee from "./Employee";

const employeeData = [
  {
    name: "fang",
    id: "abc"
  }
];

export default function App() {
  const baseEmployeeObj = {
    role: "employee",
    company: "CodeSandBox",
    location: "San Jose"
  };

  const firstEmp = { ...baseEmployeeObj, ...employeeData[0] };
  console.log(firstEmp);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {firstEmp.id === "abc" ? (
        <Employee {...firstEmp} />
      ) : (
        <h2>data is not found </h2>
      )}
    </div>
  );
}
