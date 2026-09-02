export type Member = {
    id: string;
    name: string;
    role: string;
    department: string;
    image: string;
    github: string;
    featured?: boolean;
}

export type Project = {
    slug: string;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    featured: boolean;
    href: string;
}