import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import {
  SiGithub,
  SiInstagram,
  SiDiscord,
} from "@icons-pack/react-simple-icons";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { members } from "@/data/team";

export default function Member() {
  const { memberSlug } = useParams();

  const member = members.find((member) => member.slug === memberSlug);

  if (!member) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Member Not Found</h1>

          <p className="mt-2 text-muted-foreground">
            The team member you're looking for doesn't exist.
          </p>

          <Button render={<Link to="/team" />} className="mt-6">
            <ArrowLeft className="mr-2 size-4" />
            Back to Team
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-6 py-12">
      {/* Back button */}
      <Button variant="ghost" render={<Link to="/team" />} className="mb-8">
        <ArrowLeft className="mr-2 size-4" />
        Back to Team
      </Button>

      {/* Main profile */}
      <Card className="mx-auto max-w-5xl overflow-hidden">
        <div className="grid md:grid-cols-[320px_1fr]">
          {/* Image */}
          <div className="aspect-square overflow-hidden bg-muted md:aspect-auto">
            <img
              src={member.image}
              alt={member.name}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Information */}
          <div className="flex flex-col">
            <CardHeader className="p-8">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                {member.featured && <Badge>Featured</Badge>}

                <Badge variant="secondary">{member.department}</Badge>
              </div>

              <CardTitle className="text-3xl font-bold md:text-4xl">
                {member.name}
              </CardTitle>

              <p className="text-lg text-muted-foreground">{member.role}</p>
            </CardHeader>

            <CardContent className="flex flex-1 flex-col gap-6 px-8 pb-8">
              {/* About */}
              <div>
                <h2 className="text-lg font-semibold">About</h2>

                <p className="mt-2 leading-7 text-muted-foreground">
                  {member.name} is a {member.role.toLowerCase()} at ProxDevs,
                  working in the {member.department.toLowerCase()} department.
                </p>
              </div>

              {/* Socials */}
              <div>
                <h2 className="text-lg font-semibold">Connect</h2>

                <div className="mt-3 flex flex-wrap gap-2">
                  {member.github && (
                    <Button
                      variant="outline"
                      render={
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        />
                      }
                    >
                      <SiGithub className="mr-2 size-4" />
                      GitHub
                    </Button>
                  )}

                  {member.instagram && (
                    <Button
                      variant="outline"
                      render={
                        <a
                          href={member.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                        />
                      }
                    >
                      <SiInstagram className="mr-2 size-4" />
                      Instagram
                    </Button>
                  )}

                  {member.discord && (
                    <Button
                      variant="outline"
                      render={
                        <a
                          href={member.discord}
                          target="_blank"
                          rel="noopener noreferrer"
                        />
                      }
                    >
                      <SiDiscord className="mr-2 size-4" />
                      Discord
                    </Button>
                  )}

                  {member.guns_lol && (
                    <Button
                      variant="outline"
                      render={
                        <a
                          href={member.guns_lol}
                          target="_blank"
                          rel="noopener noreferrer"
                        />
                      }
                    >
                      guns.lol
                      <ExternalLink className="ml-2 size-4" />
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </div>
        </div>
      </Card>
    </main>
  );
}
