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
    <Card className={cn(
      "p-6 backdrop-blur-sm bg-white/80 border border-white/20 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] animate-fade-up",
      className
    )}>
      <div className="flex flex-col items-center space-y-4">
        <span className="text-sm font-medium text-muted-foreground">{day}</span>
        <img
          src={icon}
          alt={condition}
          className="w-16 h-16 object-contain"
          loading="lazy"
        />
        <span className="text-2xl font-semibold">{temperature}</span>
        <span className="text-sm text-muted-foreground">{condition}</span>
      </div>
    </Card>
  );
};