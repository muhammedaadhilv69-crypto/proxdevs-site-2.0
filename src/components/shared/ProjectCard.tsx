import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {type Project} from "@/types/globals";
import { Badge } from "../ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function ProjectCard({project}: {project: Project}) {
    return (
        <Card className="w-full min-w-80">
            <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
                <img src={project.image} alt={project.title} className="w-full h-auto" />
                <div className="flex flex-wrap gap-2 my-4">
                    {project.technologies.map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                    ))}
                </div>
                <Link to={project.href} className="text-blue-500 hover:underline flex gap-2 items-center">
                    View Project
                    <ArrowRight />
                </Link>
            </CardContent>
        </Card>
    )
}