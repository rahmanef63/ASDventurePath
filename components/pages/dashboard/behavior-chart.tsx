"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { date: "Mon", positive: 4, challenging: 2 },
  { date: "Tue", positive: 3, challenging: 1 },
  { date: "Wed", positive: 5, challenging: 3 },
  { date: "Thu", positive: 6, challenging: 2 },
  { date: "Fri", positive: 4, challenging: 1 },
  { date: "Sat", positive: 7, challenging: 2 },
  { date: "Sun", positive: 5, challenging: 1 },
];

export function BehaviorChart({ className }: { className?: string }) {
  return (
    <Card className={cn("p-6", className)}>
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Behavior Patterns</h3>
          <p className="text-sm text-muted-foreground">
            Weekly overview of positive and challenging behaviors
          </p>
        </div>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="positive" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22C55E" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#22C55E" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="challenging" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#EF4444" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#EF4444" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="positive"
                stroke="#22C55E"
                fillOpacity={1}
                fill="url(#positive)"
              />
              <Area
                type="monotone"
                dataKey="challenging"
                stroke="#EF4444"
                fillOpacity={1}
                fill="url(#challenging)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
}