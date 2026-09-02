import MemberCard from "@/components/shared/MemberCard";
import { type Member } from "@/types/globals";
import { members } from "@/data/team";

export default function TeamPreview() {
    const featuredMembers = members.filter((member: Member) => member.featured);
    return (
        <div className="flex flex-wrap gap-4">
            {featuredMembers.slice(0, 3).map((member: Member) => (
                <MemberCard key={member.name} member={member} />
            ))}
        </div>
    )
}
