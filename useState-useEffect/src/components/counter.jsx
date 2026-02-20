//useState

// import React, { useState } from "react";
// import "./counter.css";

// const Counter = () => {
//   const [counter, setCounter] = useState(0);

//   function count() {
//     setCounter(counter + 1);
//   }

//   return (
//     <div className="counter-container">
//       <p id="para">you have clicked {counter}</p>
//       <button id="btn" onClick={count}>
//         Click
//       </button>
//     </div>
//   );
// };

// export default Counter;

//-----------------------------------------------------------------------------------------------------

// useEffect:

// import React, { useEffect, useState } from "react";

// const Counter = () => {
//   console.log("comp is rendered");
//   const [count, setCount] = useState(0);
//   const [total, setTotal] = useState(0);

// variation 1: runs on every render
//   useEffect(() => {
//     alert("hi how are you")
//   });

//---------------------------------------------------------------------------------------------

//variation 2 : with empty dependency
// that runs on only first render

//   useEffect(() => {
//     alert("i will render only 1st click ");
//   }, []);

//-------------------------------------------------------------------------------------------------

// variation 3 : it will run every time when count is updated
//   useEffect(() => {
//     alert("i will run every time when count is updated");
//   }, [count]);

//----------------------------------------------------------------------------------------------------

// variation 4 : it will render every time when count/total is updated
//   useEffect(() => {
//     alert("i will render every time when count /total is updated");
//   }, [count, total]);

//--------------------------------------------------------------------------------------------------

// variation 5 : adding a cleanup function
// Unmounting is the phase in React where a component is removed from the DOM, and cleanup functions inside useEffect are executed.

// useEffect(() => {
//   console.log("count is updated");

//   return () => {
//     console.log("count is unmounted from UI");
//   };
// }, [count]);

//----------------------------------------------------------------------------------------------------

//   function handleClick() {
//     setCount(count + 1);
//   }

//   function handleTotal() {
//     setTotal(total + 1);
//   }

//   return (
//     <>
//       <div>
//         <button onClick={handleClick}>update count</button>
//         <br />
//         Count is {count}
//         <br />
//         <button onClick={handleTotal}>update total</button>
//         <br />
//         total is {total}
//       </div>
//     </>
//   );
// };

// export default Counter;
