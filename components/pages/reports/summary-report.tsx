import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const weeklyHighlights = [
  {
    area: "Communication",
    achievement: "Used 5 new words consistently",
    impact: "High",
    date: "2024-03-20",
  },
  {
    area: "Social Skills",
    achievement: "Initiated play with peers twice",
    impact: "Medium",
    date: "2024-03-19",
  },
  {
    area: "Motor Skills",
    achievement: "Improved pencil grip",
    impact: "Medium",
    date: "2024-03-18",
  },
  {
    area: "Self-Care",
    achievement: "Independent morning routine",
    impact: "High",
    date: "2024-03-17",
  },
];

export function SummaryReport() {
  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Weekly Summary</h2>
          <p className="text-sm text-muted-foreground">
            Key achievements and milestones from the past week
          </p>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Development Area</TableHead>
              <TableHead>Achievement</TableHead>
              <TableHead>Impact</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {weeklyHighlights.map((highlight, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{highlight.area}</TableCell>
                <TableCell>{highlight.achievement}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      highlight.impact === "High"
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                        : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                    }`}
                  >
                    {highlight.impact}
                  </span>
                </TableCell>
                <TableCell>{highlight.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}