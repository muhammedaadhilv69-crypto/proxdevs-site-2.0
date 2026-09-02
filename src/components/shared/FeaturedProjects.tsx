import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function FeaturedProjects() {
    const featuredProjects = projects.filter(project => project.featured);
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            {featuredProjects.map((proj, index) => (
                <ProjectCard project={proj} key={index} />
            ))}
        </div>
    )
}