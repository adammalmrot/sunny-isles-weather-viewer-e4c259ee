import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface WeatherCardProps {
  day: string;
  temperature: string;
  condition: string;
  icon: string;
  className?: string;
}

export const WeatherCard = ({
  day,
  temperature,
  condition,
  icon,
  className,
}: WeatherCardProps) => {
  return (
    <Card 
      className={cn(
        "p-8 backdrop-blur-md bg-white/20 border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-up overflow-hidden group",
        className
      )}
    >
      <div className="flex flex-col items-center space-y-6">
        <span className="text-lg font-medium text-white/80">{day}</span>
        <div className="w-20 h-20 rounded-full overflow-hidden bg-white/30 p-1 group-hover:scale-110 transition-transform duration-300">
          <img
            src={icon}
            alt={condition}
            className="w-full h-full object-cover rounded-full"
            loading="lazy"
          />
        </div>
        <span className="text-4xl font-bold text-white">{temperature}</span>
        <span className="text-lg text-white/80">{condition}</span>
      </div>
    </Card>
  );
};