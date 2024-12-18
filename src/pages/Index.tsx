import { useState } from "react";
import { WeatherCard } from "@/components/WeatherCard";
import { WeatherMetrics } from "@/components/WeatherMetrics";
import { LocationSelector } from "@/components/LocationSelector";

// Placeholder data - will be replaced with API data later
const weatherData = {
  current: {
    temperature: "29°C",
    condition: "Partly Cloudy",
    humidity: "75%",
    windSpeed: "12 km/h",
    uvIndex: "High",
  },
  forecast: [
    { day: "Today", temperature: "29°C", condition: "Partly Cloudy", icon: "/placeholder.svg" },
    { day: "Tomorrow", temperature: "28°C", condition: "Sunny", icon: "/placeholder.svg" },
    { day: "Wednesday", temperature: "27°C", condition: "Scattered Showers", icon: "/placeholder.svg" },
    { day: "Thursday", temperature: "28°C", condition: "Sunny", icon: "/placeholder.svg" },
    { day: "Friday", temperature: "29°C", condition: "Partly Cloudy", icon: "/placeholder.svg" },
  ],
};

const metrics = [
  { label: "Humidity", value: "75%", icon: "/placeholder.svg" },
  { label: "Wind Speed", value: "12 km/h", icon: "/placeholder.svg" },
  { label: "UV Index", value: "High", icon: "/placeholder.svg" },
];

const Index = () => {
  const [selectedLocation, setSelectedLocation] = useState("male");

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-secondary">
      <div className="container mx-auto px-4 py-12">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-6 animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Maldives Weather
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the tropical paradise through our detailed weather forecasts
            </p>
          </div>

          {/* Location Selector */}
          <div className="flex justify-center">
            <LocationSelector onLocationChange={setSelectedLocation} />
          </div>

          {/* Current Weather */}
          <div className="flex justify-center">
            <WeatherCard
              day="Today"
              temperature={weatherData.current.temperature}
              condition={weatherData.current.condition}
              icon="/placeholder.svg"
              className="w-full max-w-sm"
            />
          </div>

          {/* Weather Metrics */}
          <WeatherMetrics metrics={metrics} />

          {/* Forecast */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-center">5-Day Forecast</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {weatherData.forecast.map((day, index) => (
                <WeatherCard
                  key={index}
                  day={day.day}
                  temperature={day.temperature}
                  condition={day.condition}
                  icon={day.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;