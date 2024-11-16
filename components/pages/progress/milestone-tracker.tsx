"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Circle } from "lucide-react";

const milestones = [
  {
    category: "Communication",
    items: [
      { title: "Uses 4-5 word sentences", completed: true, date: "2024-02-15" },
      { title: "Follows two-step instructions", completed: true, date: "2024-01-20" },
      { title: "Asks questions about surroundings", completed: false },
      { title: "Names basic colors and shapes", completed: true, date: "2024-03-01" },
    ],
  },
  {
    category: "Social Skills",
    items: [
      { title: "Takes turns in games", completed: true, date: "2024-02-10" },
      { title: "Shows interest in peer play", completed: true, date: "2024-03-05" },
      { title: "Recognizes others' emotions", completed: false },
      { title: "Participates in group activities", completed: false },
    ],
  },
  {
    category: "Motor Skills",
    items: [
      { title: "Catches a bounced ball", completed: true, date: "2024-01-15" },
      { title: "Uses scissors to cut paper", completed: true, date: "2024-02-20" },
      { title: "Draws recognizable shapes", completed: true, date: "2024-03-10" },
      { title: "Hops on one foot", completed: false },
    ],
  },
];

export function MilestoneTracker() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {milestones.map((category) => (
        <Card key={category.category} className="p-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold">{category.category}</h3>
              <div className="flex items-center space-x-2 mt-2">
                <Progress
                  value={
                    (category.items.filter((item) => item.completed).length /
                      category.items.length) *
                    100
                  }
                  className="flex-1"
                />
                <span className="text-sm text-muted-foreground">
                  {category.items.filter((item) => item.completed).length}/
                  {category.items.length}
                </span>
              </div>
            </div>
            <div className="space-y-4">
              {category.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-lg border bg-card"
                >
                  {item.completed ? (
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  ) : (
                    <Circle className="w-5 h-5 text-muted-foreground mt-0.5" />
                  )}
                  <div className="flex-1">
                    <p className="font-medium">{item.title}</p>
                    {item.completed && (
                      <p className="text-sm text-muted-foreground">
                        Achieved: {item.date}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <Button className="w-full">Add Milestone</Button>
          </div>
        </Card>
      ))}
    </div>
  );
}