import React, { useEffect, useState } from "react";

function MultiEffectComponent() {
  const [count, setCount] = useState(0);
  const [seconds, setSeconds] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  useEffect(() => {
    console.log("count changed:", count);
  }, [count]);
  //side effect logic will run only when count is changed

  useEffect(() => {
    const intervalID = setInterval(() => {
      console.log("setInterval started");
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => {
      console.log("time to stop");
      clearInterval(intervalID);
    };
  }, []);
  //it will run only on first time

  return (
    <div>
      <button onClick={handleClick}>click me {count}</button>
      <br />
      seconds : {seconds}
    </div>
  );
}

export default MultiEffectComponent;
