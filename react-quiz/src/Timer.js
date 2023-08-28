import React, { useEffect } from "react";

function Timer({ dispatch, secsLeft }) {
  const mins = Math.floor(secsLeft / 60);
  const secs = secsLeft % 60;

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="timer">
      {mins.toString().length === 1 ? `0${mins}` : mins}:{secs}
    </div>
  );
}

export default Timer;
