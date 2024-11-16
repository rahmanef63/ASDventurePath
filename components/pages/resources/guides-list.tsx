import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Download, FileText } from "lucide-react";

const guides = [
  {
    title: "Daily Routine Implementation Guide",
    category: "Behavior Management",
    pages: 24,
    downloads: 450,
    progress: 0,
    description:
      "Comprehensive guide to establishing and maintaining effective daily routines...",
  },
  {
    title: "Communication Tools Handbook",
    category: "Communication",
    pages: 32,
    downloads: 680,
    progress: 45,
    description:
      "Detailed overview of various communication tools and their implementation...",
  },
  {
    title: "Sensory Activities Workbook",
    category: "Sensory Processing",
    pages: 28,
    downloads: 320,
    progress: 75,
    description:
      "Collection of sensory-friendly activities and exercises for development...",
  },
];

export function GuidesList() {
  return (
    <div className="space-y-6">
      {guides.map((guide, index) => (
        <Card key={index} className="p-6">
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">
                  {guide.category}
                </span>
                <span className="text-sm text-muted-foreground">
                  {guide.pages} pages
                </span>
              </div>
              <h3 className="text-xl font-semibold">{guide.title}</h3>
            </div>
            <p className="text-muted-foreground">{guide.description}</p>
            
            {guide.progress > 0 && (
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{guide.progress}%</span>
                </div>
                <Progress value={guide.progress} />
              </div>
            )}

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Download className="w-4 h-4" />
                <span>{guide.downloads} downloads</span>
              </div>
              <Button>
                <FileText className="w-4 h-4 mr-2" />
                {guide.progress > 0 ? "Continue Reading" : "Start Reading"}
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}