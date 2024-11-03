/* eslint-disable react/prop-types */
import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
  useEffect(
    function () {
      const id = setInterval(() => dispatch({ type: "tick" }), 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );

  function convertSecondsToMinutes(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  }

  return (
    <div className="timer">{convertSecondsToMinutes(secondsRemaining)}</div>
  );
}

export default Timer;
