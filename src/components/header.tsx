import Link from "next/link";
import { cn } from "@/lib/utils";
import { ThemeSwitcher } from "./theme-switcher";

export default function Header() {
  return (
    <header
      className={cn(
        "container flex py-4 space-y-4 flex-col border-0 border-b-2",
        "lg:flex-row lg:space-y-0 lg:items-center lg:justify-between lg:py-8"
      )}
    >
      <div>
        <Link className="text-2xl" href="/">
          Nadeem Shareef
        </Link>
      </div>
      <div className="flex justify-between lg:space-x-4">
        <div className="flex items-center space-x-4">
          <Link href="/shareef-resume.pdf">Resume</Link>
          <Link href="/about">About</Link>
          <Link href="/blogs">Blogs</Link>
          <a
            className="hidden sm:block"
            href="https://github.com/shareef99"
            rel="noreferrer" target="_blank"
          >
            Github
          </a>
          <a href="https://www.linkedin.com/in/nadeem-shareef/" rel="noreferrer" target="_blank">
            LinkedIn
          </a>
          <a
            className="hidden sm:block"
            href="https://www.dev.to/shareef"
            rel="noreferrer" target="_blank"
          >
            Dev.to
          </a>
        </div>
        <div>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
