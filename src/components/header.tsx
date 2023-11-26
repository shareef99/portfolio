import { cn } from "@/lib/utils";
import { ThemeSwitcher } from "./theme-switcher";
import Link from "next/link";

export default function Header() {
  return (
    <header
      className={cn(
        "container flex py-4 space-y-4 flex-col border-0 border-b-2",
        "lg:flex-row lg:space-y-0 lg:items-center lg:justify-between lg:py-8"
      )}
    >
      <div>
        <Link href="/" className="text-2xl">
          Nadeem Shareef
        </Link>
      </div>
      <div className={cn("flex justify-between", "lg:space-x-4")}>
        <div className="flex items-center space-x-4">
          <Link href="/blogs">Blogs</Link>
          <a href="https://github.com/shareef99" target="_blank">
            Github
          </a>
          <a href="https://www.linkedin.com/in/nadeem-shareef/" target="_blank">
            LinkedIn
          </a>
          <a href="https://www.dev.to/shareef" target="_blank">
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
