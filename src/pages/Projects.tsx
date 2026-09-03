import { Separator } from "@/components/ui/separator";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/shared/ProjectCard";

export default function Projects() {
  return (
    <div className="p-8">
      <div>
        <h1 className="text-5xl font-bold">Projects</h1>
      </div>
      <Separator className="mt-4 mb-8" />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
