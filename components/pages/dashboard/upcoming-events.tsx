import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar, Clock, MapPin, Plus } from "lucide-react";

const events = [
  {
    title: "Speech Therapy Session",
    date: new Date(2024, 2, 25, 10, 0),
    location: "Child Development Center",
    type: "therapy",
  },
  {
    title: "Occupational Therapy",
    date: new Date(2024, 2, 26, 14, 30),
    location: "Pediatric Therapy Clinic",
    type: "therapy",
  },
  {
    title: "Parent Support Group",
    date: new Date(2024, 2, 27, 18, 0),
    location: "Community Center",
    type: "support",
  },
];

export function UpcomingEvents({ className }: { className?: string }) {
  return (
    <Card className={cn("p-6", className)}>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Upcoming Events</h3>
            <p className="text-sm text-muted-foreground">
              Schedule for the next few days
            </p>
          </div>
          <Button size="sm">
            <Plus className="w-4 h-4 mr-2" />
            Add Event
          </Button>
        </div>
        <div className="space-y-4">
          {events.map((event, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-4 rounded-lg border bg-card"
            >
              <div className="p-2 bg-primary/10 rounded-full">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 space-y-1">
                <h4 className="font-medium">{event.title}</h4>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{format(event.date, "MMM d, h:mm a")}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{event.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}