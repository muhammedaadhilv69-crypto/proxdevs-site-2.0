import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "../ui/badge";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import { type Project } from "@/types/globals";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group flex h-full flex-col overflow-hidden transition-shadow hover:shadow-md">
      {/* Project Image */}
      <div className="aspect-video overflow-hidden border-b bg-muted">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <CardHeader className="gap-2">
        <div className="flex items-start justify-between gap-4">
          <CardTitle className="text-xl">{project.title}</CardTitle>

          {project.featured && <Badge variant="secondary">Featured</Badge>}
        </div>

        <CardDescription className="line-clamp-2">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="mt-auto">
        {/* Technologies */}
        <div className="mb-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="font-normal">
              {tech}
            </Badge>
          ))}
        </div>

        {/* CTA */}
        <Link
          to={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
        >
          View Project
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </Link>
      </CardContent>
    </Card>
  );
}
