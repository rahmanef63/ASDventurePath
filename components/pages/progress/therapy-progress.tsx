"use client";

import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";

const therapyData = [
  {
    type: "Speech Therapy",
    date: new Date(2024, 2, 15),
    goals: [
      { description: "Increase vocabulary", status: "Achieved" },
      { description: "Improve sentence structure", status: "In Progress" },
    ],
    notes: "Showing good progress in word usage",
  },
  {
    type: "Occupational Therapy",
    date: new Date(2024, 2, 10),
    goals: [
      { description: "Fine motor skills", status: "In Progress" },
      { description: "Sensory integration", status: "Achieved" },
    ],
    notes: "Adapting well to sensory activities",
  },
  {
    type: "Behavioral Therapy",
    date: new Date(2024, 2, 5),
    goals: [
      { description: "Social interaction", status: "In Progress" },
      { description: "Following routines", status: "Achieved" },
    ],
    notes: "Improved response to social cues",
  },
];

export function TherapyProgress() {
  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold">Therapy Sessions Progress</h3>
          <p className="text-sm text-muted-foreground">
            Recent therapy sessions and goal achievements
          </p>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Type</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Goals</TableHead>
              <TableHead>Notes</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {therapyData.map((session, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{session.type}</TableCell>
                <TableCell>{format(session.date, "MMM d, yyyy")}</TableCell>
                <TableCell>
                  <div className="space-y-1">
                    {session.goals.map((goal, goalIndex) => (
                      <div key={goalIndex} className="flex items-center space-x-2">
                        <span
                          className={`inline-block w-2 h-2 rounded-full ${
                            goal.status === "Achieved"
                              ? "bg-green-500"
                              : "bg-yellow-500"
                          }`}
                        />
                        <span className="text-sm">{goal.description}</span>
                      </div>
                    ))}
                  </div>
                </TableCell>
                <TableCell>{session.notes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}