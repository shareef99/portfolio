import { cn } from "@/lib/utils";
import { Blog } from "@/types/blog";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const blog: Blog = await fetch(
    `https://dev.to/api/articles/shareef/${slug}`
  ).then((res) => res.json());

  return {
    title: blog.title + " | Nadeem Shareef",
    description: blog.description,
    keywords: blog.tags,
    authors: {
      name: blog.user.name,
      url: blog.user.website_url,
    },
    creator: blog.user.name,
    publisher: "Dev.to",
    robots: "index follow",
    openGraph: {
      images: [blog.social_image],
      duration: blog.reading_time_minutes,
    },
  };
}

export default async function Page({ params: { slug } }: Props) {
  const res = await fetch(`https://dev.to/api/articles/shareef/${slug}`);
  const blog: Blog = await res.json();

  return (
    <main className="container">
      <h1 className="text-3xl my-8 font-bold text-primary sm:text-4xl lg:text-5xl 2xl:text-6xl">
        {blog.title}
      </h1>
      <article
        className={cn(
          "prose max-w-full prose-slate",
          "prose-headings:text-primary",
          "prose-p:text-primary",
          "prose-a:text-primary",
          "prose-blockquote:text-accent-foreground prose-blockquote:bg-accent prose-blockquote:py-0.5",
          "prose-strong:text-primary",
          "prose-em:text-primary",
          "prose-pre:bg-secondary prose-code:text-secondary-foreground",
          "prose-li:text-primary",
          "prose-img:mx-auto"
        )}
        dangerouslySetInnerHTML={{ __html: blog.body_html }}
      />
    </main>
  );
}
