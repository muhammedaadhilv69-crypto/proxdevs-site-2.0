import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { SiGithub, SiInstagram } from "@icons-pack/react-simple-icons";

const footerLinks = [
  {
    title: "Explore",
    links: [
      { label: "Projects", href: "/projects" },
      { label: "Team", href: "/team" },
      { label: "About", href: "/about" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Join ProxDevs", href: "/join" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t mt-4">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="flex w-fit items-center gap-2 font-semibold tracking-tight"
            >
              <div className="flex size-8 items-center justify-center rounded-lg bg-foreground text-background">
                <span className="text-sm font-bold">PD</span>
              </div>

              <span className="text-lg">Prox<span className="text-purple-700">Devs</span></span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
              A student-led software development organization building useful
              software, learning through real projects, and growing together.
            </p>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-2">
              <a
                href="https://github.com/muhammedaadhilv69-crypto"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex size-9 items-center justify-center rounded-md border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <SiGithub className="size-4" />
              </a>

              <a
                href="https://instagram.com/prox.devs"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex size-9 items-center justify-center rounded-md border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <SiInstagram className="size-4" />
              </a>

              <Link
                to="/contact"
                aria-label="Contact"
                className="flex size-9 items-center justify-center rounded-md border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <Mail className="size-4" />
              </Link>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h2 className="text-sm font-semibold">{group.title}</h2>

              <nav className="mt-4 flex flex-col gap-3">
                {group.links.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="w-fit text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-3 border-t pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          {/* <p>© {new Date().getFullYear()} ProxDevs. All rights reserved.</p> */}
          <p>© 2026 ProxDevs. All rights reserved.</p>

          <p>Built by students, for the future.</p>
        </div>
      </div>
    </footer>
  );
}
