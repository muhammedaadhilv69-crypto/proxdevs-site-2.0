import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function ServiceCard({
  title,
  description,
  href
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Card className="w-80">
      <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button className="mt-4 w-full bg-purple-700 text-white hover:bg-purple-800" render={<Link to={href} />}>
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
}
