"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { area: "Communication", progress: 75 },
  { area: "Social Skills", progress: 60 },
  { area: "Motor Skills", progress: 85 },
  { area: "Self-Care", progress: 70 },
  { area: "Learning", progress: 80 },
];

export function DevelopmentProgress({ className }: { className?: string }) {
  return (
    <Card className={cn("p-6", className)}>
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Development Progress</h3>
          <p className="text-sm text-muted-foreground">
            Progress across key development areas
          </p>
        </div>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis type="number" domain={[0, 100]} />
              <YAxis dataKey="area" type="category" width={100} />
              <Tooltip />
              <Bar
                dataKey="progress"
                fill="hsl(var(--primary))"
                radius={[0, 4, 4, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
}