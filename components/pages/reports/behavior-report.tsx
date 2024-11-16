import { Card } from "@/components/ui/card";
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const behaviorData = [
  { week: "Week 1", positive: 15, challenging: 8, interventions: 5 },
  { week: "Week 2", positive: 18, challenging: 6, interventions: 4 },
  { week: "Week 3", positive: 22, challenging: 5, interventions: 3 },
  { week: "Week 4", positive: 25, challenging: 4, interventions: 3 },
];

export function BehaviorReport() {
  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">
            Monthly Behavior Analysis
          </h2>
          <p className="text-sm text-muted-foreground">
            Tracking behavior patterns and intervention effectiveness
          </p>
        </div>

        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={behaviorData}>
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="positive"
                stroke="#22C55E"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="challenging"
                stroke="#EF4444"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="interventions"
                stroke="#6366F1"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
}