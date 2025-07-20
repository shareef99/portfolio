import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";

const noto = Noto_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nadeem Shareef",
  description:
    "I'm Nadeem Shareef a passionate software developer who loves building awesome things on the internet, especially the parts you can see and play with. Over the past two years, I've been getting better at building frontend of websites, with a focus on making websites not only functional but also look and feel fantastic. The tools I use are ReactJS, NextJS, TypeScript, JavaScript, TailwindCSS, TanStack Query(React Query), Redux, HTML, CSS, SCSS, and many other react libraries to bring digital ideas to life.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={noto.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem
        >
          <Header />
          {children}
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
