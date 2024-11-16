"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { format } from "date-fns";
import { Heart, MessageCircle, Share2, Users } from "lucide-react";
import { CommunityEvents } from "./community-events";
import { SupportGroups } from "./support-groups";

export function CommunityPage() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="flex flex-col space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Community</h1>
        <p className="text-muted-foreground">
          Connect with other parents and share experiences
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="p-6 col-span-2">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Avatar>
                <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop" />
                <AvatarFallback>SJ</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <Input
                  placeholder="Share your thoughts or ask a question..."
                  className="mb-2"
                />
                <Button>Post</Button>
              </div>
            </div>

            <div className="space-y-6">
              {posts.map((post, index) => (
                <PostCard key={index} {...post} />
              ))}
            </div>
          </div>
        </Card>

        <div className="space-y-6">
          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">Community Stats</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-2xl font-bold">1.2k</p>
                  <p className="text-sm text-muted-foreground">Members</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">450</p>
                  <p className="text-sm text-muted-foreground">Posts</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">89</p>
                  <p className="text-sm text-muted-foreground">Events</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">12</p>
                  <p className="text-sm text-muted-foreground">Groups</p>
                </div>
              </div>
            </div>
          </Card>

          <Tabs defaultValue="events" className="space-y-4">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="groups">Groups</TabsTrigger>
            </TabsList>
            <TabsContent value="events">
              <CommunityEvents />
            </TabsContent>
            <TabsContent value="groups">
              <SupportGroups />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

const posts = [
  {
    author: {
      name: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop",
      handle: "sarah.j",
    },
    content:
      "Just had an amazing breakthrough with Alex during our communication exercises! The picture exchange system is really working for us. Has anyone else had success with PECS?",
    timestamp: new Date(2024, 2, 20, 14, 30),
    likes: 24,
    comments: 8,
    shares: 3,
  },
  {
    author: {
      name: "Michael Chen",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop",
      handle: "m.chen",
    },
    content:
      "Looking for recommendations on sensory-friendly activities for a 5-year-old. We've been trying different textures and materials, but would love to hear what works for others!",
    timestamp: new Date(2024, 2, 20, 12, 15),
    likes: 18,
    comments: 12,
    shares: 2,
  },
];

function PostCard({
  author,
  content,
  timestamp,
  likes,
  comments,
  shares,
}: {
  author: {
    name: string;
    image: string;
    handle: string;
  };
  content: string;
  timestamp: Date;
  likes: number;
  comments: number;
  shares: number;
}) {
  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src={author.image} />
            <AvatarFallback>{author.handle[0].toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">{author.name}</p>
            <p className="text-sm text-muted-foreground">
              @{author.handle} · {format(timestamp, "MMM d, h:mm a")}
            </p>
          </div>
        </div>
        <p>{content}</p>
        <div className="flex items-center space-x-6">
          <Button variant="ghost" size="sm" className="space-x-2">
            <Heart className="w-4 h-4" />
            <span>{likes}</span>
          </Button>
          <Button variant="ghost" size="sm" className="space-x-2">
            <MessageCircle className="w-4 h-4" />
            <span>{comments}</span>
          </Button>
          <Button variant="ghost" size="sm" className="space-x-2">
            <Share2 className="w-4 h-4" />
            <span>{shares}</span>
          </Button>
        </div>
      </div>
    </Card>
  );
}