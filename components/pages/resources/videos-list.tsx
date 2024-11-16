import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { format } from "date-fns";
import { Clock, Play, User } from "lucide-react";
import Image from "next/image";
const videos = [
  {
    title: "Visual Schedule Creation Tutorial",
    thumbnail: "https://images.unsplash.com/photo-1588702547919-26089e690ecc?w=720",
    author: "Lisa Anderson",
    date: new Date(2024, 2, 18),
    duration: "15:24",
    views: 1250,
    description:
      "Step-by-step guide to creating effective visual schedules for daily routines...",
  },
  {
    title: "Sensory-Friendly Home Adaptations",
    thumbnail: "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?w=720",
    author: "Mark Roberts",
    date: new Date(2024, 2, 12),
    duration: "12:45",
    views: 890,
    description:
      "Learn how to create a sensory-friendly environment at home with simple modifications...",
  },
  {
    title: "Social Stories Workshop",
    thumbnail: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=720",
    author: "Dr. Rachel Kim",
    date: new Date(2024, 2, 8),
    duration: "20:18",
    views: 1580,
    description:
      "Expert guidance on creating and using social stories effectively...",
  },
];

export function VideosList() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {videos.map((video, index) => (
        <Card key={index} className="overflow-hidden">
          <div className="relative aspect-video">
            <Image
              src={video.thumbnail}
              alt={video.title}
              className="object-cover w-full h-full"
            />
            <Button
              variant="secondary"
              size="icon"
              className="absolute inset-0 m-auto rounded-full bg-primary/90 hover:bg-primary"
            >
              <Play className="w-6 h-6 text-primary-foreground" />
            </Button>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <h3 className="font-semibold mb-2">{video.title}</h3>
              <p className="text-sm text-muted-foreground">{video.description}</p>
            </div>
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>{video.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{video.duration}</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">
                {format(video.date, "MMM d, yyyy")}
              </span>
              <span className="text-muted-foreground">{video.views} views</span>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}