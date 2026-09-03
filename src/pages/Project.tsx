import {type Project} from "@/types/globals";
import {useParams} from "react-router-dom";
import { projects } from "@/data/projects";

export default function Project() {
    const params = useParams<string>();
    const project: Project = projects.find((p) => p.slug === params.slug) as Project;

    if (!project) {
      return <div>Project not found</div>;
    }
    return <div className="p-4">{project.title}</div>
}