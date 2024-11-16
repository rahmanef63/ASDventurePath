import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { format } from "date-fns";
import { Calendar, MapPin } from "lucide-react";

const events = [
  {
    title: "Parent Support Group Meeting",
    date: new Date(2024, 2, 25, 18, 30),
    location: "Community Center",
    attendees: 15,
  },
  {
    title: "Sensory-Friendly Playdate",
    date: new Date(2024, 2, 27, 10, 0),
    location: "Inclusive Play Park",
    attendees: 8,
  },
  {
    title: "Workshop: Communication Strategies",
    date: new Date(2024, 2, 30, 14, 0),
    location: "Online",
    attendees: 25,
  },
];

export function CommunityEvents() {
  return (
    <Card className="p-4">
      <div className="space-y-4">
        {events.map((event, index) => (
          <div
            key={index}
            className="p-4 rounded-lg border bg-card space-y-2"
          >
            <h4 className="font-semibold">{event.title}</h4>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>{format(event.date, "MMM d, h:mm a")}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="text-sm text-muted-foreground">
                {event.attendees} attending
              </span>
              <Button size="sm">Join</Button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}