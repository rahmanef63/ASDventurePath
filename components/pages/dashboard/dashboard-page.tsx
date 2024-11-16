"use client";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Activity, Brain, Calendar, Target } from "lucide-react";
import { BehaviorChart } from "./behavior-chart";
import { DevelopmentProgress } from "./development-progress";
import { RecommendedActivities } from "./recommended-activities";
import { UpcomingEvents } from "./upcoming-events";

export function DashboardPage() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="flex flex-col space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Welcome back, Sarah</h1>
        <p className="text-muted-foreground">
          Here&apos;s how Alex is progressing this week
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Weekly Goals"
          value="6/8"
          description="Goals completed"
          icon={Target}
          progress={75}
        />
        <MetricCard
          title="Activities"
          value="12"
          description="Completed this week"
          icon={Activity}
          progress={80}
        />
        <MetricCard
          title="Learning Sessions"
          value="8"
          description="Hours this week"
          icon={Brain}
          progress={66}
        />
        <MetricCard
          title="Upcoming Events"
          value="3"
          description="Scheduled this week"
          icon={Calendar}
          progress={100}
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="behavior">Behavior</TabsTrigger>
          <TabsTrigger value="development">Development</TabsTrigger>
          <TabsTrigger value="activities">Activities</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <BehaviorChart />
            <DevelopmentProgress />
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <RecommendedActivities />
            <UpcomingEvents />
          </div>
        </TabsContent>

        <TabsContent value="behavior">
          <BehaviorChart className="h-[500px]" />
        </TabsContent>

        <TabsContent value="development">
          <DevelopmentProgress className="h-[500px]" />
        </TabsContent>

        <TabsContent value="activities">
          <div className="grid gap-6 md:grid-cols-2">
            <RecommendedActivities className="h-[500px]" />
            <UpcomingEvents className="h-[500px]" />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function MetricCard({
  title,
  value,
  description,
  icon: Icon,
  progress,
}: {
  title: string;
  value: string;
  description: string;
  icon: React.ElementType;
  progress: number;
}) {
  return (
    <Card className="p-6 space-y-4">
      <div className="flex items-center space-x-4">
        <div className="p-2 bg-primary/10 rounded-full">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold">{value}</span>
          <span className="text-sm text-muted-foreground">{progress}%</span>
        </div>
        <Progress value={progress} />
      </div>
    </Card>
  );
}