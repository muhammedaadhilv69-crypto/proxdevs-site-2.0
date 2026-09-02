import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {type Member} from "@/types/globals";

export default function MemberCard({member}: {member: Member}) {
    return (
        <Card className="w-72">
            <CardHeader>
                <CardTitle>{member.name}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-2">
                <p>{member.role}</p>
                <p>{member.department}</p>
                </div>
            </CardContent>
        </Card>
    );
}