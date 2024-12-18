import { useState } from "react";
import { WeatherCard } from "@/components/WeatherCard";
import { WeatherMetrics } from "@/components/WeatherMetrics";
import { LocationSelector } from "@/components/LocationSelector";
import Header from "@/components/Header";

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
    { day: "Today", temperature: "29°C", condition: "Partly Cloudy", icon: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&h=400&fit=crop" },
    { day: "Tomorrow", temperature: "28°C", condition: "Sunny", icon: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=400&fit=crop" },
    { day: "Wednesday", temperature: "27°C", condition: "Scattered Showers", icon: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=400&fit=crop" },
    { day: "Thursday", temperature: "28°C", condition: "Sunny", icon: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=400&fit=crop" },
    { day: "Friday", temperature: "29°C", condition: "Partly Cloudy", icon: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=400&h=400&fit=crop" },
  ],
};

const metrics = [
  { label: "Humidity", value: "75%", icon: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=100&h=100&fit=crop" },
  { label: "Wind Speed", value: "12 km/h", icon: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=100&h=100&fit=crop" },
  { label: "UV Index", value: "High", icon: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=100&h=100&fit=crop" },
];

const Index = () => {
  const [selectedLocation, setSelectedLocation] = useState("male");

  return (
    <>
      <Header />
      <div 
        className="min-h-screen bg-gradient-to-b from-primary to-secondary pt-16"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1506744038136-46273834b3fb)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4 py-12 relative">
          {/* Overlay for better readability */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm -mx-4" />
          
          <div className="space-y-12 relative">
            {/* Header */}
            <div className="text-center space-y-6 animate-fade-up">
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Maldives Weather
              </h1>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
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
                icon={weatherData.forecast[0].icon}
                className="w-full max-w-sm"
              />
            </div>

            {/* Weather Metrics */}
            <WeatherMetrics metrics={metrics} />

            {/* Forecast */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-center text-white">5-Day Forecast</h2>
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
    </>
  );
};

export default Index;
