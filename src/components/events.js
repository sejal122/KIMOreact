import React, { useState } from "react";

function Events() {
    const [inputtext,setInputtext]=useState('')
  const handleClick = (e) => {
    console.log(e);

  };
//   const getValue = (e) => {
//     console.log(e.target.value)
//     setInputtext(e.target.value)
//   };
  return (
    <>
      <input onChange={(e)=>setInputtext(e.target.value)}/>
      {/* <input onChange={(e)=>getValue(e)}/> */}
        <h3>{inputtext}</h3>
      <button onClick={handleClick}>see event object</button>
    </>
  );
}

export default Events;
//funcname()