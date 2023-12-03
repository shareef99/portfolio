import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BlogList } from "@/types/blog";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blogs | Shareef",
  description:
    "I write blogs about the problems I encounter during development of softwares and how I solve them.",
};

export default async function Page() {
  const res = await fetch("https://dev.to/api/articles?username=shareef");
  const blogs: BlogList[] = await res.json();

  return (
    <main className="container">
      <section className="my-8 lg:my-16">
        <h1 className="text-3xl mb-8 underline underline-offset-8">
          All Blogs
        </h1>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {blogs.map((blog) => (
            <Card key={blog.id}>
              <CardHeader className="space-y-2">
                <CardTitle>
                  <Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
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
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
