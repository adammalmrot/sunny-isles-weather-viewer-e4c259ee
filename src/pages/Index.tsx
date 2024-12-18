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
        className="min-h-screen bg-gradient-to-br from-accent/20 to-primary/20"
        style={{
          backgroundImage: `url(/lovable-uploads/9dab586f-a612-40aa-a336-c440868ea07c.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4 py-12 relative">
          {/* Main content wrapper with glass effect */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] rounded-xl shadow-2xl mx-4" />
          
          <div className="relative space-y-12 pt-8">
            {/* Header Section */}
            <div className="text-center space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
                Maldives Weather
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto font-light">
                Experience paradise through our detailed weather forecasts
              </p>
            </div>

            {/* Location Selector with new styling */}
            <div className="flex justify-center">
              <div className="w-full max-w-md backdrop-blur-md bg-white/20 p-6 rounded-xl shadow-lg">
                <LocationSelector onLocationChange={setSelectedLocation} />
              </div>
            </div>

            {/* Current Weather Card */}
            <div className="flex justify-center">
              <div className="w-full max-w-lg">
                <WeatherCard
                  day="Today"
                  temperature={weatherData.current.temperature}
                  condition={weatherData.current.condition}
                  icon={weatherData.forecast[0].icon}
                  className="transform hover:scale-105 transition-all duration-300"
                />
              </div>
            </div>

            {/* Weather Metrics with new styling */}
            <div className="max-w-4xl mx-auto">
              <WeatherMetrics metrics={metrics} />
            </div>

            {/* Forecast Section with new styling */}
            <div className="space-y-8">
              <h2 className="text-3xl font-semibold text-center text-white drop-shadow-md">
                5-Day Forecast
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
                {weatherData.forecast.map((day, index) => (
                  <WeatherCard
                    key={index}
                    day={day.day}
                    temperature={day.temperature}
                    condition={day.condition}
                    icon={day.icon}
                    className="transform hover:scale-105 transition-all duration-300"
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