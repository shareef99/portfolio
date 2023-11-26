import { Copyright } from "lucide-react";

export default function Footer() {
  return (
    <footer className="container my-8 flex items-center space-x-2 justify-center">
      <span>Copyright</span>
      <Copyright size="1rem" />{" "}
      <span> {new Date().getFullYear()} Nadeem Shareef</span>
    </footer>
  );
}
