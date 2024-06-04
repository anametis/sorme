"use client";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const CountDown = ({
  className,
  ...props
}: {
  className?: string;
  [key: string]: any;
}): JSX.Element => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const COUNTDOWN_TARGET: Date = new Date("2025-01-01T23:59:59");

  const getTimeToExpire = (): {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } => {
    const totalTimeLeft: number =
      COUNTDOWN_TARGET.getTime() - new Date().getTime();
    const days: number = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
    const hours: number = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
    const minutes: number = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
    const seconds: number = Math.floor((totalTimeLeft / 1000) % 60);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(getTimeToExpire);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeToExpire());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  if (isClient)
    return (
      <div
        className={cn("transition-all ease-in-out w-full p-2 m-2", className)}
        {...props}
      >
        {timeLeft.hours} : {timeLeft.minutes} : {timeLeft.seconds}
      </div>
    );
};

export default CountDown;
