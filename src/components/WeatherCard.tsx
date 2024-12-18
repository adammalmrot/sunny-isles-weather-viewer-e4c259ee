import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Sun, CloudRain, Cloud, CloudSun } from "lucide-react";

interface WeatherCardProps {
  day: string;
  temperature: string;
  condition: string;
  icon: string;
  className?: string;
}

const getWeatherIcon = (condition: string) => {
  switch (condition.toLowerCase()) {
    case "sunny":
      return <Sun className="w-12 h-12 text-accent animate-pulse" />;
    case "partly cloudy":
      return <CloudSun className="w-12 h-12 text-accent" />;
    case "scattered showers":
      return <CloudRain className="w-12 h-12 text-accent" />;
    default:
      return <Cloud className="w-12 h-12 text-accent" />;
  }
};

export const WeatherCard = ({
  day,
  temperature,
  condition,
  className,
}: WeatherCardProps) => {
  return (
    <Card 
      className={cn(
        "p-8 bg-white/80 border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-up overflow-hidden group",
        className
      )}
    >
      <div className="flex flex-col items-center space-y-6">
        <span className="text-lg font-medium text-accent">{day}</span>
        <div className="rounded-full p-4 bg-primary/50 group-hover:scale-110 transition-transform duration-300">
          {getWeatherIcon(condition)}
        </div>
        <span className="text-4xl font-bold text-accent">{temperature}</span>
        <span className="text-lg text-muted-foreground">{condition}</span>
      </div>
    </Card>
  );
};