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
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export const metadata: Metadata = {
  title: "Blogs | Shareef",
  description:
    "I write blogs about the problems I encounter during development of softwares and how I solve them.",
};

export default async function Page({
  searchParams: { page = "1" },
}: {
  searchParams: { page?: string };
}) {
  const res = await fetch("https://dev.to/api/articles?username=shareef");
  const blogs: BlogList[] = await res.json();

  const articlesPerPage = 6;
  const totalPages = Math.ceil(blogs.length / articlesPerPage);

  return (
    <main className="container">
      <section className="my-8 lg:my-16">
        <h1 className="text-3xl mb-8 underline underline-offset-8">
          All Blogs
        </h1>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {blogs
            .filter(
              (_, index) =>
                index < articlesPerPage * Number(page) &&
                index >= articlesPerPage * (Number(page) - 1)
            )
            .map((blog) => (
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
        <Pagination className="mt-8">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href={`blogs?page=${Number(page) - 1 || 1}`}
              />
            </PaginationItem>
            {Array.from({ length: totalPages }).map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  href={`blogs?page=${index + 1}`}
                  isActive={index + 1 === Number(page)}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                href={`blogs?page=${
                  Number(page) >= totalPages ? totalPages : Number(page) + 1
                }`}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </section>
    </main>
  );
}
