import { Separator } from "@/components/ui/separator";

export default function About() {
  return (
    <div className="flex flex-col px-16 py-4">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-2">
        <h1 className="text-5xl font-bold">About Us</h1>
      </div>

      <Separator className="mt-4 mb-8" />

      <div className="mx-auto flex w-full max-w-4xl flex-col gap-12">
        {/* Hero */}
        <section className="space-y-4">
          <h2 className="text-4xl font-bold">We Build. We Learn. We Ship.</h2>

          <p className="text-lg leading-8 text-muted-foreground">
            ProxDevs is a team of students and creatives working together to
            build useful, practical, and impactful digital products.
          </p>

          <p className="leading-7 text-muted-foreground">
            We're a group of people who enjoy turning ideas into real projects —
            from web applications and tools to experiments that push our skills
            further.
          </p>
        </section>

        {/* Who We Are */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Who We Are</h2>

          <p className="leading-7 text-muted-foreground">
            We're a growing team with different skills, perspectives, and areas
            of expertise. Some of us focus on development, while others work on
            design, content, and community.
          </p>

          <p className="leading-7 text-muted-foreground">
            What brings us together is simple:{" "}
            <span className="font-medium text-foreground">
              we like building things.
            </span>
          </p>
        </section>

        {/* What We Do */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">What We Do</h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border p-5">
              <h3 className="font-semibold">Web Development</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Modern, responsive web applications built for real-world use.
              </p>
            </div>

            <div className="rounded-lg border p-5">
              <h3 className="font-semibold">Software Development</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Tools and applications designed around real problems.
              </p>
            </div>

            <div className="rounded-lg border p-5">
              <h3 className="font-semibold">UI & Design</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Clean, functional, and intuitive digital experiences.
              </p>
            </div>

            <div className="rounded-lg border p-5">
              <h3 className="font-semibold">Research & Experimentation</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Exploring new technologies, ideas, and ways of solving problems.
              </p>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">How We Work</h2>

          <p className="leading-7 text-muted-foreground">
            We believe the best way to learn development is to{" "}
            <span className="font-medium text-foreground">
              build real things.
            </span>
          </p>

          <p className="leading-7 text-muted-foreground">
            We challenge ourselves with projects, experiment with new
            technologies, review each other's work, and continuously improve
            what we build.
          </p>

          <blockquote className="border-l-2 pl-6 text-lg font-medium italic">
            Ship. Learn. Iterate.
          </blockquote>
        </section>

        {/* Closing */}
        <section className="rounded-xl border bg-muted/30 p-8 text-center">
          <h2 className="text-2xl font-bold">What's Next?</h2>

          <p className="mx-auto mt-3 max-w-2xl leading-7 text-muted-foreground">
            ProxDevs is still growing, and we're just getting started. We're
            building a portfolio of projects, expanding our skills, and
            exploring new ideas.
          </p>
        </section>
      </div>
    </div>
  );
}
