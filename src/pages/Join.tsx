import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Join() {
  return (
    <div className="flex flex-col px-16 py-4">
      {/* Header */}
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-5xl font-bold">Join ProxDevs</h1>

        <p className="mt-3 max-w-2xl text-muted-foreground">
          Interested in joining the team? Fill out the form below.
        </p>
      </div>

      <Separator className="mb-10 mt-4" />

      {/* Form */}
      <div className="mx-auto w-full max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle>Application</CardTitle>
            <CardDescription>
              Tell us a little about yourself and what you can bring to
              ProxDevs.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>

                <Input id="name" name="name" placeholder="Your name" />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>

                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="role" className="text-sm font-medium">
                  Area of Interest
                </label>

                <Input
                  id="role"
                  name="role"
                  placeholder="e.g. Development, Design, Social Media"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="about" className="text-sm font-medium">
                  About You
                </label>

                <Textarea
                  id="about"
                  name="about"
                  placeholder="Tell us about yourself, your experience, and what you'd like to work on."
                  className="min-h-36 resize-none"
                />
              </div>

              <Button type="submit" className="w-full">
                Submit Application
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
