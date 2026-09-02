import {type Project} from "@/types/globals";

export default function Project({project}: {project: Project}) {
    return <div className="p-4">{project.name}</div>
}