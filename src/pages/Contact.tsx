import { Mail, MessageSquare, ArrowUpRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function Contact() {
  return (
    <div className="flex flex-col px-16 py-4">
      {/* Header */}
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-5xl font-bold">Contact Us</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Have a project, idea, or question? We'd love to hear from you.
        </p>
      </div>

      <Separator className="mb-10 mt-4" />

      {/* Content */}
      <div className="mx-auto grid w-full max-w-5xl gap-10 md:grid-cols-2">
        {/* Left side */}
        <div className="flex flex-col justify-center space-y-8">
          <div>
            <h2 className="text-3xl font-bold">Let's build something.</h2>

            <p className="mt-3 leading-7 text-muted-foreground">
              Whether you have an idea you'd like to bring to life, want to
              collaborate with us, or simply want to get in touch, send us a
              message.
            </p>
          </div>

          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="rounded-lg border p-3">
                <Mail size={20} />
              </div>

              <div>
                <p className="font-medium">Email</p>
                <a
                  href="mailto:contact@proxdevs.com"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  contact@proxdevs.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-lg border p-3">
                <MessageSquare size={20} />
              </div>

              <div>
                <p className="font-medium">Have an idea?</p>
                <p className="text-sm text-muted-foreground">
                  Tell us what you're working on and we'll see how we can help.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact form */}
        <Card>
          <CardHeader>
            <CardTitle>Send us a message</CardTitle>
            <CardDescription>
              Fill out the form and we'll get back to you.
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
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>

                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project..."
                  className="min-h-32 resize-none"
                />
              </div>

              <Button type="submit" className="w-full group">
                Send Message
                <ArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
