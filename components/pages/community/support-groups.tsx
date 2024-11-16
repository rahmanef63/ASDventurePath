import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const groups = [
  {
    name: "Early Intervention Support",
    members: 156,
    description: "Support for parents of newly diagnosed children",
    image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=96&h=96&fit=crop",
  },
  {
    name: "Sensory Processing",
    members: 89,
    description: "Sharing strategies for sensory challenges",
    image: "https://images.unsplash.com/photo-1573126617899-41f1dffb196c?w=96&h=96&fit=crop",
  },
  {
    name: "Teen Transitions",
    members: 124,
    description: "Supporting teens on the spectrum",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=96&h=96&fit=crop",
  },
];

export function SupportGroups() {
  return (
    <Card className="p-4">
      <div className="space-y-4">
        {groups.map((group, index) => (
          <div
            key={index}
            className="p-4 rounded-lg border bg-card space-y-4"
          >
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={group.image} />
                <AvatarFallback>{group.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h4 className="font-semibold">{group.name}</h4>
                <p className="text-sm text-muted-foreground">
                  {group.members} members
                </p>
              </div>
            </div>
            <p className="text-sm">{group.description}</p>
            <Button size="sm" className="w-full">
              Join Group
            </Button>
          </div>
        ))}
      </div>
    </Card>
  );
}