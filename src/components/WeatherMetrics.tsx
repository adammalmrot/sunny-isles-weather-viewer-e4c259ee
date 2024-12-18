import { Card } from "@/components/ui/card";

interface MetricProps {
  label: string;
  value: string;
  icon: string;
}

export const WeatherMetrics = ({ metrics }: { metrics: MetricProps[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full animate-fade-up">
      {metrics.map((metric, index) => (
        <Card
          key={index}
          className="p-6 backdrop-blur-md bg-white/20 border-none shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-4"
        >
          <div className="w-12 h-12 rounded-full overflow-hidden bg-white/30 flex items-center justify-center">
            <img
              src={metric.icon}
              alt={metric.label}
              className="w-8 h-8 object-contain"
              loading="lazy"
            />
          </div>
          <div>
            <p className="text-sm text-white/70">{metric.label}</p>
            <p className="text-2xl font-semibold text-white">{metric.value}</p>
          </div>
        </Card>
      ))}
    </div>
  );
};