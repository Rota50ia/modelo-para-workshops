import CountdownTimer from "./CountdownTimer";

interface UrgencyBarProps {
  targetDate: Date;
  percentageFilled: number;
}

const UrgencyBar = ({ targetDate, percentageFilled }: UrgencyBarProps) => {
  return (
    <div className="w-full bg-primary py-3 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-foreground font-bold text-lg md:text-xl tracking-wide">
          {percentageFilled}% DAS VAGAS PREENCHIDAS
        </div>
        <div className="flex gap-2 md:gap-4 text-foreground text-sm md:text-base">
          <CountdownTimer targetDate={targetDate} variant="compact" />
        </div>
      </div>
    </div>
  );
};

export default UrgencyBar;
