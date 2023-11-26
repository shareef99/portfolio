import { Copyright } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container my-8 flex space-y-2 items-center flex-col justify-center">
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
      <div className="flex items-center space-x-2 justify-center">
        <span>Copyright</span>
        <Copyright size="1rem" />{" "}
        <span> {new Date().getFullYear()} Nadeem Shareef</span>
      </div>
    </footer>
  );
}
