"use client";

import { Card } from "@/components/ui/card";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
} from "recharts";

const skillsData = [
  {
    category: "Language",
    current: 75,
    previous: 60,
  },
  {
    category: "Social",
    current: 65,
    previous: 50,
  },
  {
    category: "Motor",
    current: 80,
    previous: 70,
  },
  {
    category: "Cognitive",
    current: 70,
    previous: 55,
  },
  {
    category: "Self-Help",
    current: 85,
    previous: 75,
  },
  {
    category: "Play",
    current: 75,
    previous: 65,
  },
];

export function SkillsProgress() {
  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold">Skills Development</h3>
          <p className="text-sm text-muted-foreground">
            Comparison of current skills with previous assessment
          </p>
        </div>
        <div className="h-[500px]">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={skillsData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="category" />
              <PolarRadiusAxis angle={30} domain={[0, 100]} />
              <Radar
                name="Previous"
                dataKey="previous"
                stroke="hsl(var(--muted-foreground))"
                fill="hsl(var(--muted))"
                fillOpacity={0.5}
              />
              <Radar
                name="Current"
                dataKey="current"
                stroke="hsl(var(--primary))"
                fill="hsl(var(--primary))"
                fillOpacity={0.5}
              />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
}