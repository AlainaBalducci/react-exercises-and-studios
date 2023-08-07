import React, { useState } from 'react';

export default function Doorbell() {
  const [bell, setBell] = useState("");

  const handleClick = () => {
    setBell(prevBell => prevBell + "you rang...");
  }

  return (
    <div>
      <h1>Ring the Doorbell!</h1>
      <p>{bell}</p>
      <button onClick={handleClick}>Ring Bell</button>
    </div>
  );
}