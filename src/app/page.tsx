import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { blogList } from "@/types/blog";
import Link from "next/link";
import { ReactElement } from "react";

export default async function Page() {
  const getBlogs = async () => {
    const res = await fetch(
      "https://dev.to/api/articles?username=shareef&page=1&per_page=6"
    );
    const data = await res.json();
    return data as blogList[];
  };

  const blogs = await getBlogs();
  const testimonials = [
    {
      text: "I have hired Nadeem as a coach to help me get started with React development, as I am working on a new SaaS project. Nadeem is a great teacher who is able to simplify complex concepts. I also very much value his ability to point out the pros and cons of different technical approaches to solving a particular problem or process.",
      author: {
        name: "Adrian Neumeyer",
        url: "https://www.tacticalprojectmanager.com/",
        tagline: "Creator of Tactical Project Manager | Germany",
      },
    },
    {
      text: "I recently hired Nadeem as a coach to help me implement some features in my SaaS project, and I have to say, it was one of the best decisions I've made! I was previously working on my project alone using Next.js with Firebase, but things quickly became complicated and overwhelming. Nadeem's expertise and experience proved invaluable, as he was able to guide me through the implementation process and point out the pros and cons of different technical approaches to solve problems. His ability to explain complex technical concepts in a clear and concise way was truly impressive, and he helped me gain a deeper understanding of the codebase and the underlying technologies. Additionally, Nadeem was always patient, responsive, and willing to go above and beyond to ensure that I was able to achieve my goals.  I highly recommend Nadeem to anyone looking for a skilled and knowledgeable technical coach.",
      author: {
        name: "Fouad Liady",
        url: "https://www.linkedin.com/in/fouad-liady-8b917a189/",
        tagline: "Frontend Developer | Italy",
      },
    },
  ];
  const experiences = [
    {
      company: {
        name: "KMZee Holding",
        url: "https://kmzee.online",
        location: "Hyderabad, India",
        remote: true,
      },
      role: "Software Developer",
      duration: "May 2022 - Present",
      responsibilities: [
        <>
          Lead the frontend development of the{" "}
          <Link
            href="https://kmzee.in"
            target="_blank"
            className="underline underline-offset-4 text-bold italic"
          >
            KMZee Merchandise
          </Link>{" "}
          e-commerce vertical of{" "}
          <Link
            href="https://kmzee.online"
            target="_blank"
            className="underline underline-offset-4 text-bold italic"
          >
            Kmzee Holding
          </Link>
          .
        </>,
        "Developed an operation-driven dashboard for multiple clients in the car auction industry, enabling them to control auctions on their application from the dashboard.",
        "Designed reusable React components with TypeScript that reduced development time and improved code quality and maintainability.",
        <>
          Build a modern, infographic, user-friendly website for our
          company&apos;s tech vertical{" "}
          <Link
            href="https://kmzee.tech"
            target="_blank"
            className="underline underline-offset-4 text-bold italic"
          >
            KMZee Technologies
          </Link>
          , and clients.
        </>,
        "Streamline the technologies used in making the dashboards for KMZee Holding clients.",
      ],
    },
  ];

  return (
    <main className="container">
      <section className="my-8 lg:my-16">
        <p className="text-base lg:text-lg">Hi there, I&apos;m</p>
        <h1 className="text-4xl lg:text-6xl my-4">Nadeem Shareef</h1>
        <p className="text-base lg:text-lg">
          I&apos;m a software engineer based in Hyderabad, India. I enjoy
          creating things that live on the internet, whether that be websites,
          applications, or anything in between. I have been working for 2 year,
          with a demonstrated history of working in the Computer Software
          industry. Skilled in Front-end Development. I have 2 years of
          experience in HTML, CSS, SCSS, JavaScript, Bootstrap, tailwind CSS,
          StyledComponent, React JS and Next JS. Hence, I have successfully
          completed several web projects from scratch. Yet, I learn continuously
          and never stop exploring new technologies. So, I have also gained
          knowledge of Node JS, Express JS, Mongo DB, Python, firebase and React
          Native with time.
        </p>
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
                  <Link href={blog.url}>{blog.title}</Link>
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
      <section className="my-8 lg:my-16">
        <h2 className="text-3xl mb-8 underline underline-offset-8">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 gap-8 place-items-start lg:grid-cols-2">
          {testimonials.map((t, i) => (
            <Card key={i} className="">
              <CardHeader>
                <CardTitle>{t.author.name}</CardTitle>
                <CardDescription>
                  <Link href={t.author.url} target="_blank">
                    {t.author.tagline}
                  </Link>
                </CardDescription>
              </CardHeader>
              <CardContent>{t.text}</CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section className="my-8 lg:my-16">
        <h2 className="text-3xl mb-8 underline underline-offset-8">
          Experience
        </h2>
        <div>
          {experiences.map((e, i) => (
            <div key={i} className="space-y-4">
              <div className="space-x-4 flex items-center">
                <span className="text-lg lg:text-2xl">
                  <a href={e.company.url}>{e.company.name}</a>
                </span>
                <span>-</span>
                <span className="text-base lg:text-xl">{e.role}</span>
              </div>
              <div className="space-x-2 text-sm flex items-center">
                <span className="dark:text-slate-300">{e.duration}</span>
                <span className="">-</span>
                <span className="dark:text-slate-300">
                  {e.company.location}
                </span>
                {e.company.remote && <Badge variant="secondary">remote</Badge>}
              </div>
              <ul className="list-inside space-y-2">
                {e.responsibilities.map((r, i) => (
                  <li key={i} className="list-disc text-base">
                    {typeof r === "string" ? <span>{r}</span> : r}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
