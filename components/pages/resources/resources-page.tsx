"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, FileText, Search, Video } from "lucide-react";
import { ArticlesList } from "./articles-list";
import { GuidesList } from "./guides-list";
import { VideosList } from "./videos-list";

export function ResourcesPage() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="flex flex-col space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Resources</h1>
        <p className="text-muted-foreground">
          Educational materials and expert guidance for your journey
        </p>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search resources..."
            className="pl-10"
          />
        </div>
        <Button>Search</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <ResourceCard
          title="Expert Articles"
          description="Research-based articles and insights"
          icon={FileText}
          count={45}
        />
        <ResourceCard
          title="Video Tutorials"
          description="Visual guides and demonstrations"
          icon={Video}
          count={32}
        />
        <ResourceCard
          title="Practice Guides"
          description="Step-by-step activity guides"
          icon={BookOpen}
          count={28}
        />
      </div>

      <Tabs defaultValue="articles" className="space-y-6">
        <TabsList>
          <TabsTrigger value="articles">Articles</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
          <TabsTrigger value="guides">Guides</TabsTrigger>
        </TabsList>

        <TabsContent value="articles">
          <ArticlesList />
        </TabsContent>

        <TabsContent value="videos">
          <VideosList />
        </TabsContent>

        <TabsContent value="guides">
          <GuidesList />
        </TabsContent>
      </Tabs>
    </div>
  );
}

function ResourceCard({
  title,
  description,
  icon: Icon,
  count,
}: {
  title: string;
  description: string;
  icon: React.ElementType;
  count: number;
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
      <div className="mt-4">
        <p className="text-2xl font-bold">{count}</p>
        <p className="text-sm text-muted-foreground">Available resources</p>
      </div>
    </Card>
  );
}