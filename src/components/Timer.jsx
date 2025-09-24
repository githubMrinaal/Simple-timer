import { useState, useRef } from "react";

function Timer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  let timerId = useRef();

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      runTimer();
    }
  };

  const runTimer = () => {
    timerId.current = setTimeout(() => {
      setTime((prev) => prev + 1);
      runTimer(); // call again
    }, 1000);
  };

  const pauseTimer = () => {
    setIsRunning(false);
    clearTimeout(timerId.current);
  };

  const resetTimer = () => {
    setIsRunning(false);
    clearTimeout(timerId.current);
    setTime(0);
  };

  const formatTime = (seconds) => {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${hrs}:${mins}:${secs}`;
  };

  return (
    <div>
      <h1>{formatTime(time)}</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default Timer;
