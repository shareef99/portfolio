import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { type BlogList } from "@/types/blog";

export default async function Page() {
  const res = await fetch(
    "https://dev.to/api/articles?username=shareef&page=1&per_page=6"
  );
  const data = await res.json();
  const blogs = data as BlogList[];

  return (
    <main className="container">
      <section className="my-8 lg:my-16">
        <p className="text-base lg:text-lg">Hi there, I&apos;m</p>
        <h1 className="text-4xl lg:text-6xl my-4">Nadeem Shareef</h1>
        <div className="space-y-4">
          <p className="text-base lg:text-lg">
            a passionate software developer who loves building awesome things on
            the internet, especially the parts you can see and play with. Over
            the past two years, I&apos;ve been getting better at building
            frontend of websites, with a focus on making websites not only
            functional but also look and feel fantastic. The tools I use are
            ReactJS, NextJS, TypeScript, JavaScript, TailwindCSS, TanStack
            Query(React Query), Redux, HTML, CSS, SCSS, and many other react
            libraries to bring digital ideas to life.
          </p>
          <p className="text-base lg:text-lg">
            I&apos;m always on the learning curve, staying updated with the
            latest tech trends. I make sure to keep my skills sharp. I strongly
            believe in teamwork to turn your ideas into a real, working website.
            Whether it&apos;s a business site or a cool web app, count on me to
            make it happen.
          </p>
          <p className="text-base lg:text-lg">
            Check out{" "}
            <Link
              className="underline underline-offset-4 italic font-bold"
              href="/#testimonials"
            >
              testimonials
            </Link>{" "}
            to see opinions of some of the peoples I&apos;ve enjoyed working
            with. They showcase my commitment of working with peoples. Oh, and
            if you&apos;re curious, I also share my insights and experiences
            through blogs on{" "}
            <Link
              className="underline underline-offset-4 italic font-bold"
              href="https://dev.to/shareef"
              target="_blank"
            >
              Dev.to
            </Link>
            , where I get around 3k to 4k weekly views. It&apos;s a platform
            where I love discussing tech topics and sharing what I&apos;ve
            learned. If you&apos;re looking for a developer who not only knows
            their stuff but also enjoys turning ideas into reality,{" "}
            <Link
              className="underline underline-offset-4 italic font-bold"
              href="https://linkedin.com/in/nadeem-shareef"
            >
              let&apos;s chat
            </Link>
            . I&apos;m excited to help bring your digital dreams to life!
          </p>
        </div>
      </section>
      <section className="my-8 lg:my-16">
        <h2 className="text-3xl mb-8 underline underline-offset-8">
          Recent Blogs
        </h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {blogs.map((blog) => (
            <Card key={blog.id}>
              <CardHeader className="space-y-2">
                <CardTitle>
                  <Link href={`blogs/${blog.slug}`}>{blog.title}</Link>
                </CardTitle>
                <CardDescription>{blog.description}</CardDescription>
              </CardHeader>
              <CardFooter className="flex gap-2 flex-wrap lg:gap-4">
                <Badge variant="secondary">
                  {blog.reading_time_minutes} mins
                </Badge>
                {blog.tag_list.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
                <Badge
                  className="sm:ml-auto lg:ml-0 xl:ml-auto"
                  variant="outline"
                >
                  {new Date(blog.published_at).getDate() < 10 ? "0" : ""}
                  {new Date(blog.published_at).getDate()}-
                  {new Date(blog.published_at).getMonth() < 10 ? "0" : ""}
                  {new Date(blog.published_at).getMonth()}-
                  {new Date(blog.published_at).getFullYear()}
                </Badge>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
