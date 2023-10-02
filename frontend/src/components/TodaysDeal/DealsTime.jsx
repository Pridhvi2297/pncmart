import React, { useEffect, useState } from "react";

const DealsTime = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const targetDate = new Date("2023-10-07");
    const currentDate = new Date();
    const difference = targetDate - currentDate;

    if (difference <= 0) {
      return null; // The deal is closed
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  const renderTimeComponent = (value, label) => (
    <span key={label} className="text-2xl text-[#475ad2]">
      {value} {label}{" "}
    </span>
  );

  return (
    <div>
      {timeLeft ? (
        <>
          {timeLeft.days > 0 && renderTimeComponent(timeLeft.days, "Days")}
          {timeLeft.hours > 0 && renderTimeComponent(timeLeft.hours, "Hours")}
          {timeLeft.minutes > 0 && renderTimeComponent(timeLeft.minutes, "Minutes")}
          {timeLeft.seconds > 0 && renderTimeComponent(timeLeft.seconds, "Seconds")}
        </>
      ) : (
        <span className="text-red-500 text-2xl">Sorry, the Deal is Closed</span>
      )}
    </div>
  );
};

export default DealsTime;
