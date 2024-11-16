"use client";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Award, Calendar, Flag, Target } from "lucide-react";
import { MilestoneTracker } from "./milestone-tracker";
import { SkillsProgress } from "./skills-progress";
import { TherapyProgress } from "./therapy-progress";

export function ProgressPage() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="flex flex-col space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Progress Tracking</h1>
        <p className="text-muted-foreground">
          Monitor and celebrate Alex&apos;s developmental journey
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <ProgressCard
          title="Monthly Goals"
          value={8}
          total={10}
          icon={Target}
          date="March 2024"
        />
        <ProgressCard
          title="Milestones"
          value={15}
          total={20}
          icon={Flag}
          date="Age 4-5 years"
        />
        <ProgressCard
          title="Achievements"
          value={12}
          total={12}
          icon={Award}
          date="Last 3 months"
        />
        <ProgressCard
          title="Sessions"
          value={24}
          total={30}
          icon={Calendar}
          date="This quarter"
        />
      </div>

      <Tabs defaultValue="milestones" className="space-y-6">
        <TabsList>
          <TabsTrigger value="milestones">Milestones</TabsTrigger>
          <TabsTrigger value="skills">Skills Progress</TabsTrigger>
          <TabsTrigger value="therapy">Therapy Progress</TabsTrigger>
        </TabsList>

        <TabsContent value="milestones">
          <MilestoneTracker />
        </TabsContent>

        <TabsContent value="skills">
          <SkillsProgress />
        </TabsContent>

        <TabsContent value="therapy">
          <TherapyProgress />
        </TabsContent>
      </Tabs>
    </div>
  );
}

function ProgressCard({
  title,
  value,
  total,
  icon: Icon,
  date,
}: {
  title: string;
  value: number;
  total: number;
  icon: React.ElementType;
  date: string;
}) {
  const percentage = (value / total) * 100;

  return (
    <Card className="p-6 space-y-4">
      <div className="flex items-center space-x-4">
        <div className="p-2 bg-primary/10 rounded-full">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{date}</p>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold">
            {value}/{total}
          </span>
          <span className="text-sm text-muted-foreground">{percentage}%</span>
        </div>
        <Progress value={percentage} />
      </div>
    </Card>
  );
}