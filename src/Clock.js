import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []); 

  const formattedTime = time.toLocaleTimeString();

  return (
    <div>
      <h2>Clock</h2>
      <p>Current time: {formattedTime}</p>
    </div>
  );
}

export default Clock;
