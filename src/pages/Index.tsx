import { useState } from "react";
import { WeatherCard } from "@/components/WeatherCard";
import { WeatherMetrics } from "@/components/WeatherMetrics";
import { LocationSelector } from "@/components/LocationSelector";
import Header from "@/components/Header";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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

// News data
const newsItems = [
  {
    id: 1,
    title: "Record-Breaking Clear Skies Expected This Weekend",
    description: "Perfect weather conditions forecasted for outdoor activities",
    image: "/lovable-uploads/03ba4976-a3ea-4414-b126-f4ec5e1f4b81.png",
    type: "good"
  },
  {
    id: 2,
    title: "Storm Warning: Preparation Advisory",
    description: "Residents advised to take precautions as tropical storm approaches",
    image: "/lovable-uploads/1b0338be-72df-4827-acd1-367da387ea25.png",
    type: "bad"
  },
  {
    id: 3,
    title: "Tourism Boost: Perfect Beach Weather Ahead",
    description: "Local resorts report surge in bookings due to ideal weather conditions",
    image: "/lovable-uploads/741e24fe-e665-4e68-90fd-f197a4b36577.png",
    type: "good"
  },
  {
    id: 4,
    title: "High Tide Alert: Coastal Areas on Watch",
    description: "Maritime authorities issue advisory for beach activities",
    image: "/lovable-uploads/9dab586f-a612-40aa-a336-c440868ea07c.png",
    type: "bad"
  }
];

const Index = () => {
  const [selectedLocation, setSelectedLocation] = useState("male");
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth().toString());
  const [forecastDays, setForecastDays] = useState("5");

  const visibleForecast = weatherData.forecast.slice(0, parseInt(forecastDays));

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-accent/20 via-primary/20 to-accent/20">
        <div className="w-full px-4 py-12">
          <div className="space-y-12 pt-16">
            {/* Header Section */}
            <div className="text-center space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-accent drop-shadow-lg">
                Maldives Weather
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
                Experience paradise through our detailed weather forecasts
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-4 max-w-4xl mx-auto">
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

            <div className="flex justify-center px-4">
              <div className="w-full max-w-4xl">
                <WeatherCard
                  day="Today"
                  temperature={weatherData.current.temperature}
                  condition={weatherData.current.condition}
                  icon={weatherData.forecast[0].icon}
                  className="transform hover:scale-105 transition-all duration-300"
                  index={0}
                />
              </div>
            </div>

            <div className="max-w-6xl mx-auto px-4">
              <WeatherMetrics metrics={metrics} />
            </div>

            <div className="space-y-8 px-4">
              <div className="flex flex-col items-center gap-4">
                <h2 className="text-3xl font-semibold text-center text-accent drop-shadow-md">
                  Weather Forecast
                </h2>
                <ToggleGroup
                  type="single"
                  value={forecastDays}
                  onValueChange={(value) => value && setForecastDays(value)}
                  className="bg-white/20 backdrop-blur-md p-1 rounded-lg"
                >
                  <ToggleGroupItem value="5" className="px-6">
                    5 Days
                  </ToggleGroupItem>
                  <ToggleGroupItem value="10" className="px-6">
                    10 Days
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
                {visibleForecast.map((day, index) => (
                  <WeatherCard
                    key={index}
                    day={day.day}
                    temperature={day.temperature}
                    condition={day.condition}
                    icon={day.icon}
                    className="transform hover:scale-105 transition-all duration-300"
                    index={index + 1}
                  />
                ))}
              </div>
            </div>

            {/* News Section */}
            <div className="space-y-8 px-4 max-w-7xl mx-auto">
              <div className="flex justify-between items-center">
                <h2 className="text-3xl font-semibold text-accent drop-shadow-md">
                  Latest News
                </h2>
                <Button variant="outline" asChild>
                  <Link to="/news">View All News</Link>
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {newsItems.map((news) => (
                  <Card 
                    key={news.id}
                    className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${
                      news.type === 'good' ? 'hover:border-green-400' : 'hover:border-red-400'
                    }`}
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={news.image}
                        alt={news.title}
                        className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg line-clamp-2">{news.title}</CardTitle>
                      <CardDescription className="line-clamp-2">
                        {news.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
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
