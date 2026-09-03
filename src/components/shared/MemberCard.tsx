import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type Member } from "@/types/globals";

export default function MemberCard({ member }: { member: Member }) {
  return (
    <Card className="min-w-75 w-full">
      <CardHeader>
        <CardTitle className="text-xl font-bold">{member.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2 p-2 border rounded-xl">
          <p className="text-sm">{member.role}</p>
          <p className="text-lg font-semibold">{member.department}</p>
        </div>
      </CardContent>
    </Card>
  );
}
