"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Server,
  Smartphone,
  Globe,
  Database,
  Cloud,
  Brain,
} from "lucide-react";

const skills = [
  {
    category: "Frontend Development",
    icon: Globe,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend Development",
    icon: Server,
    skills: ["Node.js", "Python", "Java", "GraphQL"],
  },
  {
    category: "Mobile Development",
    icon: Smartphone,
    skills: ["React Native", "Flutter", "iOS", "Android"],
  },
  {
    category: "Database",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Redis", "Firebase"],
  },
  {
    category: "Cloud Services",
    icon: Cloud,
    skills: ["AWS", "Google Cloud", "Azure", "Vercel"],
  },
  {
    category: "AI & ML",
    icon: Brain,
    skills: ["TensorFlow", "PyTorch", "OpenAI", "Computer Vision"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
          <p className="text-muted-foreground">
            A comprehensive toolkit for building modern applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <category.icon className="h-6 w-6 text-primary mr-2" />
                    <h3 className="font-semibold">{category.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.skills.map((skill) => (
                      <li key={skill} className="text-muted-foreground">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
