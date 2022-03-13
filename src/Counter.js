import React, { useState } from "react";

const Counter = (props) => {
  const [mycount, setMycount] = useState(0);
  // console.log(props);
  const { name, count, setCount } = props;
  const handleIncrement = () => {
    setCount(count + 1);
    setMycount(mycount + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
    setMycount(mycount - 1);
  };
  return (
    <div style={{ margain: "10px", backgroundColor: "gray" }}>
      <h3>
        Total vote for {name} is {mycount}
      </h3>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  );
};
export default Counter;
