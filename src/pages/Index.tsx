import { useState } from "react";
import { WeatherCard } from "@/components/WeatherCard";
import { WeatherMetrics } from "@/components/WeatherMetrics";
import { LocationSelector } from "@/components/LocationSelector";
import Header from "@/components/Header";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Extended placeholder data for 10-day forecast
const weatherData = {
  current: {
    temperature: "29°C",
    condition: "Partly Cloudy",
    humidity: "75%",
    windSpeed: "12 km/h",
    uvIndex: "High",
  },
  forecast: [
    { day: "Today", temperature: "29°C", condition: "Partly Cloudy", icon: "partly-cloudy" },
    { day: "Tomorrow", temperature: "28°C", condition: "Sunny", icon: "sunny" },
    { day: "Day 3", temperature: "27°C", condition: "Scattered Showers", icon: "scattered-showers" },
    { day: "Day 4", temperature: "28°C", condition: "Sunny", icon: "sunny" },
    { day: "Day 5", temperature: "29°C", condition: "Partly Cloudy", icon: "partly-cloudy" },
    { day: "Day 6", temperature: "30°C", condition: "Sunny", icon: "sunny" },
    { day: "Day 7", temperature: "28°C", condition: "Scattered Showers", icon: "scattered-showers" },
    { day: "Day 8", temperature: "27°C", condition: "Partly Cloudy", icon: "partly-cloudy" },
    { day: "Day 9", temperature: "29°C", condition: "Sunny", icon: "sunny" },
    { day: "Day 10", temperature: "28°C", condition: "Partly Cloudy", icon: "partly-cloudy" },
  ],
};

const metrics = [
  { label: "Humidity", value: "75%", icon: "droplets" },
  { label: "Wind Speed", value: "12 km/h", icon: "wind" },
  { label: "UV Index", value: "High", icon: "sun" },
];

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const Index = () => {
  const [selectedLocation, setSelectedLocation] = useState("male");
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth().toString());

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-accent/20 to-primary/20">
        <div className="container mx-auto px-4 py-12 relative">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] rounded-xl shadow-2xl mx-4" />
          
          <div className="relative space-y-12 pt-8">
            {/* Header Section */}
            <div className="text-center space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-accent drop-shadow-lg">
                Maldives Weather
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
                Experience paradise through our detailed weather forecasts
              </p>
            </div>

            {/* Location and Month Selector */}
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <div className="w-full md:w-64 backdrop-blur-md bg-white/20 p-6 rounded-xl shadow-lg">
                <LocationSelector onLocationChange={setSelectedLocation} />
              </div>
              <div className="w-full md:w-64 backdrop-blur-md bg-white/20 p-6 rounded-xl shadow-lg">
                <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select month" />
                  </SelectTrigger>
                  <SelectContent>
                    {months.map((month, index) => (
                      <SelectItem key={index} value={index.toString()}>
                        {month}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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

            {/* Weather Metrics */}
            <div className="max-w-4xl mx-auto">
              <WeatherMetrics metrics={metrics} />
            </div>

            {/* 10-Day Forecast Section */}
            <div className="space-y-8">
              <h2 className="text-3xl font-semibold text-center text-accent drop-shadow-md">
                10-Day Forecast
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
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