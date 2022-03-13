import React from "react";

const Employee = (props) => {
  console.log(props);
  const { name, id } = props;
  return (
    <div>
      <h3>{` Welcome ${name.toUpperCase()} (${id})`}</h3>
    </div>
  );
};
export default Employee;
