import { Card } from "@/components/ui/card";

interface MetricProps {
  label: string;
  value: string;
  icon: string;
}

export const WeatherMetrics = ({ metrics }: { metrics: MetricProps[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full animate-fade-up">
      {metrics.map((metric, index) => (
        <Card
          key={index}
          className="p-4 backdrop-blur-sm bg-white/80 border border-white/20 flex items-center space-x-4"
        >
          <img
            src={metric.icon}
            alt={metric.label}
            className="w-8 h-8 object-contain"
            loading="lazy"
          />
          <div>
            <p className="text-sm text-muted-foreground">{metric.label}</p>
            <p className="text-lg font-semibold">{metric.value}</p>
          </div>
        </Card>
      ))}
    </div>
  );
};