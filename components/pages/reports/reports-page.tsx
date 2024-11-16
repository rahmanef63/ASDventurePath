"use client";

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileBarChart, FileText, PieChart } from "lucide-react";
import { BehaviorReport } from "./behavior-report";
import { ProgressReport } from "./progress-report";
import { SummaryReport } from "./summary-report";

export function ReportsPage() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="flex flex-col space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Reports</h1>
        <p className="text-muted-foreground">
          Comprehensive insights and analysis of Alex&apos;s development
          journey
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <MetricCard
          title="Weekly Report"
          description="Summary of this week's progress"
          icon={FileText}
        />
        <MetricCard
          title="Behavior Analysis"
          description="Patterns and trends analysis"
          icon={PieChart}
        />
        <MetricCard
          title="Progress Tracking"
          description="Development milestones report"
          icon={FileBarChart}
        />
      </div>

      <Tabs defaultValue="summary" className="space-y-6">
        <TabsList>
          <TabsTrigger value="summary">Summary</TabsTrigger>
          <TabsTrigger value="behavior">Behavior Analysis</TabsTrigger>
          <TabsTrigger value="progress">Progress Report</TabsTrigger>
        </TabsList>

        <TabsContent value="summary">
          <SummaryReport />
        </TabsContent>

        <TabsContent value="behavior">
          <BehaviorReport />
        </TabsContent>

        <TabsContent value="progress">
          <ProgressReport />
        </TabsContent>
      </Tabs>
    </div>
  );
}

function MetricCard({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: React.ElementType;
}) {
  return (
    <Card className="p-6">
      <div className="flex items-center space-x-4">
        <div className="p-2 bg-primary/10 rounded-full">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </Card>
  );
}