import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution built with Next.js, Node.js, and MongoDB.",
    image: "https://via.placeholder.com/600x400",
    demoLink: "https://example.com/demo1",
    codeLink: "https://github.com/yourusername/project1",
  },
  {
    title: "Task Management App",
    description:
      "A React-based task management application with real-time updates using Socket.io.",
    image: "https://via.placeholder.com/600x400",
    demoLink: "https://example.com/demo2",
    codeLink: "https://github.com/yourusername/project2",
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather dashboard that integrates with multiple APIs to provide accurate forecasts.",
    image: "https://via.placeholder.com/600x400",
    demoLink: "https://example.com/demo3",
    codeLink: "https://github.com/yourusername/project3",
  },
];

export default function ProjectShowcase() {
  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-gray-700 text-white">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="text-gray-300">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button asChild variant="outline">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
