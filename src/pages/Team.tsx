import { Separator } from "@/components/ui/separator";
import MemberCard from "@/components/shared/MemberCard";
import { members } from "@/data/team";

export default function Team() {
  return (
    <div className="flex flex-col px-16 py-4">
      <div>
        <h1 className="font-bold text-5xl">Our Team</h1>
      </div>
      <Separator className="mt-4 mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {members.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
}
