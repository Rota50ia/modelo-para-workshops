import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: Date;
  variant?: "compact" | "detailed";
}

const CountdownTimer = ({ targetDate, variant = "detailed" }: CountdownTimerProps) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +targetDate - +new Date();
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num: number) => String(num).padStart(2, "0");

  if (variant === "compact") {
    return (
      <div className="flex gap-3 items-center justify-center text-foreground">
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold">{formatNumber(timeLeft.days)}</span>
          <span className="text-xs uppercase tracking-wider opacity-70">Dias</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold">{formatNumber(timeLeft.hours)}</span>
          <span className="text-xs uppercase tracking-wider opacity-70">Horas</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold">{formatNumber(timeLeft.minutes)}</span>
          <span className="text-xs uppercase tracking-wider opacity-70">Minutos</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold">{formatNumber(timeLeft.seconds)}</span>
          <span className="text-xs uppercase tracking-wider opacity-70">Segundos</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-4 items-center justify-center">
      {[
        { value: timeLeft.days, label: "Dias" },
        { value: timeLeft.hours, label: "Horas" },
        { value: timeLeft.minutes, label: "Minutos" },
        { value: timeLeft.seconds, label: "Segundos" },
      ].map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="text-5xl md:text-6xl font-bold text-foreground animate-pulse">
            {formatNumber(item.value)}
          </div>
          <div className="text-sm md:text-base uppercase tracking-wider text-muted-foreground mt-1">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
