import { useState } from "react";
import { ArrowRight, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import Services from "@/components/shared/Services";
import FeaturedProjects from "@/components/shared/FeaturedProjects";
import TeamPreview from "@/components/shared/TeamPreview";

const heroImage =
  "https://images.pexels.com/photos/10187003/pexels-photo-10187003.jpeg";

export default function Home() {
  const [heroImageLoading, setHeroImageLoading] = useState(true);

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero */}
      <section className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2 lg:px-8 lg:py-24">
        <div className="flex flex-col items-center gap-5 text-center md:items-start md:text-left">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            ProxDevs
          </h1>

          <p className="max-w-xl text-xl text-muted-foreground">
            We build software that{" "}
            <em className="font-semibold text-foreground">
              actually helps
            </em>{" "}
            the people who use it.
          </p>

          <p className="max-w-xl text-muted-foreground">
            ProxDevs is a student-led development organization building real
            products, exploring ideas, and growing together through code.
          </p>

          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <Button render={<Link to="/projects" />}>
              Explore Projects
              <ArrowRight />
            </Button>

            <Button variant="outline" render={<Link to="/team" />}>
              Meet the Team
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl">
          {heroImageLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-muted">
              <div className="size-10 animate-spin rounded-full border-2 border-muted-foreground border-t-transparent" />
            </div>
          )}

          <img
            src={heroImage}
            width={400}
            height={400}
            alt="ProxDevs Team"
            onLoad={() => setHeroImageLoading(false)}
            className="aspect-square w-full object-cover"
          />
        </div>
      </section>

      {/* Services */}
      <section className="border-y bg-muted/30">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-8">
          <div className="mb-8">
            <p className="text-sm font-semibold tracking-widest text-muted-foreground">
              WHAT WE DO
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              What we build
            </h2>
          </div>

          <Services />
        </div>
      </section>

      {/* Featured Projects */}
      <section className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold tracking-widest text-muted-foreground">
              PROJECTS
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              Featured Projects
            </h2>
          </div>

          <Link
            to="/projects"
            className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:block"
          >
            View all →
          </Link>
        </div>

        <FeaturedProjects />
      </section>

      {/* About */}
      <section className="border-y bg-muted/30">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-8">
          <div className="flex max-w-xl flex-col gap-5">
            <p className="text-sm font-semibold tracking-widest text-muted-foreground">
              ABOUT PROXDEVS
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              We're young developers building real things.
            </h2>

            <p className="text-muted-foreground">
              ProxDevs is a student-led developer community focused on
              learning, building, collaborating, and solving real problems
              through technology.
            </p>

            <div>
              <Button variant="outline" render={<Link to="/about" />}>
                Learn more
                <ArrowRight />
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl">
            <img
              src={heroImage}
              width={400}
              height={300}
              alt="ProxDevs Team"
              className="aspect-4/3 w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-8">
          <p className="text-sm font-semibold tracking-widest text-muted-foreground">
            OUR TEAM
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight">
            Meet the people behind ProxDevs
          </h2>
        </div>

        <TeamPreview />

        <Button className="mt-8" render={<Link to="/team" />}>
          Meet the team
          <ArrowRight />
        </Button>
      </section>

      {/* CTA */}
      <section className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-8">
        <div className="flex flex-col items-center gap-6 rounded-3xl border bg-muted/50 px-6 py-16 text-center">
          <p className="text-sm font-semibold tracking-widest text-muted-foreground">
            LET'S BUILD
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Got an idea?
          </h2>

          <p className="max-w-lg text-muted-foreground">
            Got a project, idea, or collaboration in mind? Let's talk.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button render={<Link to="/contact" />}>
              Contact us
              <ArrowRight />
            </Button>

            <Button variant="outline" render={<Link to="/join" />}>
              Join ProxDevs
              <UserPlus />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

