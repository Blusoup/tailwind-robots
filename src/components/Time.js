import React from "react";

const msToTime = (ms) => {
  const msPerSecond = 1000;
  const msPerMinute = msPerSecond * 60;
  const msPerHour = msPerMinute * 60;

  const hours = Math.floor(ms / msPerHour);
  const hoursRest = ms % msPerHour;
  const minutes = Math.floor(hoursRest / msPerMinute);
  const minutesRest = hoursRest % msPerMinute;
  const seconds = Math.floor(minutesRest / msPerSecond);
  return (
    String(hours).padStart(2, "0") +
    ":" +
    String(minutes).padStart(2, "0") +
    ":" +
    String(seconds).padStart(2, "0")
  );
};

const Time = ({ ms }) => {
  return (
    <div className="bg-gray-900 p-4 w-screen">
      <div className="">
        <h3 className="text-center text-2xl text-gray-200">Time on Page</h3>
        <div className="text-gray-200">{msToTime(ms)}</div>
      </div>
    </div>
  );
};

export default Time;
