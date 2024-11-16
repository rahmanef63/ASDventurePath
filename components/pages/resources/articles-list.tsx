import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { format } from "date-fns";
import { BookOpen, Clock, User } from "lucide-react";

const articles = [
  {
    title: "Understanding Sensory Processing in Autism",
    author: "Dr. Sarah Williams",
    date: new Date(2024, 2, 15),
    readTime: "8 min read",
    category: "Development",
    excerpt:
      "Learn about sensory processing differences and practical strategies for support...",
  },
  {
    title: "Communication Strategies for Non-verbal Children",
    author: "Dr. Michael Chen",
    date: new Date(2024, 2, 10),
    readTime: "12 min read",
    category: "Communication",
    excerpt:
      "Effective methods and tools for developing communication skills in non-verbal children...",
  },
  {
    title: "Building Social Skills Through Play",
    author: "Emma Thompson",
    date: new Date(2024, 2, 5),
    readTime: "10 min read",
    category: "Social Skills",
    excerpt:
      "Discover how structured play activities can help develop crucial social skills...",
  },
];

export function ArticlesList() {
  return (
    <div className="space-y-6">
      {articles.map((article, index) => (
        <Card key={index} className="p-6">
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">
                  {article.category}
                </span>
                <span className="text-sm text-muted-foreground">
                  {format(article.date, "MMM d, yyyy")}
                </span>
              </div>
              <h3 className="text-xl font-semibold">{article.title}</h3>
            </div>
            <p className="text-muted-foreground">{article.excerpt}</p>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{article.readTime}</span>
              </div>
            </div>
            <Button className="w-full mt-4">
              <BookOpen className="w-4 h-4 mr-2" />
              Read Article
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}