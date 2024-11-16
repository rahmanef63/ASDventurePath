import { Card } from "@/components/ui/card";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const progressData = [
  {
    area: "Communication",
    current: 75,
    target: 85,
    previous: 65,
  },
  {
    area: "Social Skills",
    current: 60,
    target: 75,
    previous: 50,
  },
  {
    area: "Motor Skills",
    current: 85,
    target: 90,
    previous: 80,
  },
  {
    area: "Self-Care",
    current: 70,
    target: 80,
    previous: 60,
  },
  {
    area: "Learning",
    current: 80,
    target: 85,
    previous: 70,
  },
];

export function ProgressReport() {
  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">
            Development Progress
          </h2>
          <p className="text-sm text-muted-foreground">
            Comparing current progress with previous assessments and targets
          </p>
        </div>

        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={progressData}>
              <XAxis dataKey="area" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="previous"
                fill="hsl(var(--muted))"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="current"
                fill="hsl(var(--primary))"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="target"
                fill="hsl(var(--secondary))"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
}