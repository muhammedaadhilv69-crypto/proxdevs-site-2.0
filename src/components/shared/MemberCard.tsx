import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import {
  SiGithub as Github,
  SiInstagram as Instagram,
  SiDiscord as Discord,
} from "@icons-pack/react-simple-icons";
import { Link } from "react-router-dom";

import { type Member } from "@/types/globals";

export default function MemberCard({ member }: { member: Member }) {
  return (
    <Card className="group w-full min-w-75 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <Link to={`/team/${member.slug}`}>
        {/* Profile image */}
        <div className="relative aspect-square overflow-hidden bg-muted">
          <img
            src={member.image}
            alt={member.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {member.featured && (
            <Badge className="absolute left-4 top-4">Featured</Badge>
          )}
        </div>

        <CardHeader className="gap-1">
          <CardTitle className="text-xl font-bold">{member.name}</CardTitle>

          <p className="text-sm text-muted-foreground">{member.role}</p>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Department */}
          <div className="rounded-xl border bg-muted/30 p-3">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Department
            </p>

            <p className="mt-1 font-semibold">{member.department}</p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-2">
            {member.github && (
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name}'s GitHub`}
                className="rounded-lg border p-2 transition-colors hover:bg-muted"
              >
                <Github className="size-4" />
              </a>
            )}

            {member.instagram && (
              <a
                href={member.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name}'s Instagram`}
                className="rounded-lg border p-2 transition-colors hover:bg-muted"
              >
                <Instagram className="size-4" />
              </a>
            )}

            {member.discord && (
              <a
                href={member.discord}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name}'s Discord`}
                className="rounded-lg border p-2 transition-colors hover:bg-muted"
              >
                <Discord className="size-4" />
              </a>
            )}

            {member.guns_lol && (
              <a
                href={member.guns_lol}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name}'s guns.lol profile`}
                className="rounded-lg border p-2 transition-colors hover:bg-muted"
              >
                <ExternalLink className="size-4" />
              </a>
            )}
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
