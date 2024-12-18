import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const newsItems = [
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

interface NewsSectionProps {
  limit?: number;
  showViewAll?: boolean;
}

export const NewsSection = ({ limit, showViewAll = true }: NewsSectionProps) => {
  const displayedNews = limit ? newsItems.slice(0, limit) : newsItems;

  return (
    <div className="space-y-8 px-4 max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-semibold text-accent drop-shadow-md">
          Latest News
        </h2>
        {showViewAll && (
          <Button variant="outline" asChild>
            <Link to="/news">View All News</Link>
          </Button>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {displayedNews.map((news) => (
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
              <CardTitle className="text-xl">{news.title}</CardTitle>
              <CardDescription className="text-base">
                {news.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};