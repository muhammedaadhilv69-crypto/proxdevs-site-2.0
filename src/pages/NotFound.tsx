import { ArrowLeft, Home, SearchX } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-6">
      <div className="mx-auto max-w-lg text-center">
        <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-2xl border bg-muted/50">
          <SearchX className="size-7 text-muted-foreground" />
        </div>

        <p className="mb-2 text-sm font-medium text-muted-foreground">
          ERROR 404
        </p>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Page not found.
        </h1>

        <p className="mt-4 text-muted-foreground">
          Looks like this route doesn't exist. The page may have been moved,
          deleted, or never existed in the first place.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button render={<Link to="/" />}>
              <Home />
              Back to home
          </Button>

          <Button variant="outline" render={<Link to={-1 as unknown as string} />}>
            <ArrowLeft />
            Go back
          </Button>
        </div>
      </div>
    </main>
  );
}
