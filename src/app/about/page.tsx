import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
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
          <a
            href="https://kmzee.in"
            target="_blank"
            className="underline underline-offset-4 text-bold italic"
          >
            KMZee Merchandise
          </a>{" "}
          e-commerce vertical of{" "}
          <a
            href="https://kmzee.online"
            target="_blank"
            className="underline underline-offset-4 text-bold italic"
          >
            Kmzee Holding
          </a>
          .
        </>,
        "Developed an operation-driven dashboard for multiple clients in the car auction industry, enabling them to control auctions on their application from the dashboard.",
        "Designed reusable React components with TypeScript that reduced development time and improved code quality and maintainability.",
        <>
          Build a modern, infographic, user-friendly website for our
          company&apos;s tech vertical{" "}
          <a
            href="https://kmzee.tech"
            target="_blank"
            className="underline underline-offset-4 text-bold italic"
          >
            KMZee Technologies
          </a>
          , and clients.
        </>,
        "Streamline the technologies used in making the dashboards for KMZee Holding clients.",
      ],
    },
  ];
  return (
    <main className="container my-8 lg:my-12">
      <section>
        <h1 className="text-3xl mb-8">About Me</h1>
        <p className="leading-6">
          I am not a <em>“React Developer”</em>, <em>“Frontend Developer”</em>,
          or <em>“Framework Developer”</em>. I am a software developer. I solve
          problems. I love solving problems related to the user experience of
          the software. I am great at solving problems using <em>React</em> and
          it&apos;s ecosystem, Redux, NextJS, TypeScript, JavaScript,
          TailwindCSS, Firebase, Zod, and TanStack Query.
        </p>
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
              <div className="gap-2 text-sm flex flex-col sm:flex-row items-start sm:items-center">
                <span className="dark:text-slate-300">{e.duration}</span>
                <span className="hidden sm:block">-</span>
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
      <section className="my-8 lg:my-16" id="testimonials">
        <h2 className="text-3xl mb-8 underline underline-offset-8">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 gap-8 place-items-start lg:grid-cols-2">
          {testimonials.map((t, i) => (
            <Card key={i} className="">
              <CardHeader>
                <CardTitle>{t.author.name}</CardTitle>
                <CardDescription>
                  <a href={t.author.url} target="_blank">
                    {t.author.tagline}
                  </a>
                </CardDescription>
              </CardHeader>
              <CardContent>{t.text}</CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
