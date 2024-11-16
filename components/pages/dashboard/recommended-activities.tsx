import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight, BookOpen, Gamepad2, Music, Puzzle } from "lucide-react";

const activities = [
  {
    title: "Picture Exchange Game",
    description: "Practice communication skills through visual exchanges",
    icon: Puzzle,
    duration: "20 mins",
  },
  {
    title: "Music & Movement",
    description: "Develop motor skills through rhythmic activities",
    icon: Music,
    duration: "15 mins",
  },
  {
    title: "Interactive Story Time",
    description: "Enhance language comprehension and engagement",
    icon: BookOpen,
    duration: "25 mins",
  },
  {
    title: "Sensory Play Session",
    description: "Explore textures and improve sensory processing",
    icon: Gamepad2,
    duration: "30 mins",
  },
];

export function RecommendedActivities({ className }: { className?: string }) {
  return (
    <Card className={cn("p-6", className)}>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold">Recommended Activities</h3>
          <p className="text-sm text-muted-foreground">
            Personalized activities based on recent progress
          </p>
        </div>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 p-4 rounded-lg border bg-card"
            >
              <div className="p-2 bg-primary/10 rounded-full">
                <activity.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 space-y-1">
                <h4 className="font-medium">{activity.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {activity.description}
                </p>
                <p className="text-sm font-medium">{activity.duration}</p>
              </div>
              <Button variant="ghost" size="icon">
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}