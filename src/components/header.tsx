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
        <a href="/" className="text-2xl">
          Nadeem Shareef
        </a>
      </div>
      <div className={cn("flex justify-between", "lg:space-x-4")}>
        <div className="flex items-center space-x-4">
          <a href="/blogs">Blogs</a>
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
