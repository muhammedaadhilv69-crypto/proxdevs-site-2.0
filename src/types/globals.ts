export type Member = {
    id: string;
    slug: string;
    name: string;
    role: string;
    department: string;
    image?: string;
    github?: string;
    featured?: boolean;
    instagram?: string;
    discord?: string;
    guns_lol?: string;
}

export type Project = {
    slug: string;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    featured: boolean;
}