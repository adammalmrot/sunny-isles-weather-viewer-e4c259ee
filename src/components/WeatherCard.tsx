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
  const isToday = day.toLowerCase() === "today";
  
  return (
    <Card 
      className={cn(
        "p-8 border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-up overflow-hidden group relative",
        isToday ? "text-white" : "bg-white/80",
        className
      )}
      style={isToday ? {
        backgroundImage: "url('/lovable-uploads/bf2a9916-b56f-4bd2-a7b0-95c5950147c5.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      } : undefined}
    >
      {isToday && (
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] transition-all duration-300 group-hover:backdrop-blur-0 group-hover:bg-black/20" />
      )}
      <div className={cn(
        "flex flex-col items-center space-y-6",
        isToday ? "relative z-10" : ""
      )}>
        <span className="text-lg font-medium">{day}</span>
        <div className={cn(
          "rounded-full p-4 group-hover:scale-110 transition-transform duration-300",
          isToday ? "bg-white/20" : "bg-primary/50"
        )}>
          {getWeatherIcon(condition)}
        </div>
        <span className="text-4xl font-bold">{temperature}</span>
        <span className={cn(
          "text-lg",
          isToday ? "text-white/90" : "text-muted-foreground"
        )}>{condition}</span>
      </div>
    </Card>
  );
};