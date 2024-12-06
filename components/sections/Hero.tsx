"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Code, Smartphone } from "lucide-react";
import FloatingLaptop from "@/components/FloatingLaptop";

export default function Hero() {
  return (
    <section id="about" className="min-h-screen pt-16 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Full Stack Developer
              <span className="text-primary block">AI & Mobile Specialist</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Crafting innovative solutions across web, mobile, and AI
              technologies. Turning complex problems into elegant, user-friendly
              applications.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <div className="flex items-center">
                <Code className="h-5 w-5 mr-2 text-primary" />
                <span>Full Stack Development</span>
              </div>
              <div className="flex items-center">
                <Smartphone className="h-5 w-5 mr-2 text-primary" />
                <span>Mobile Apps</span>
              </div>
              <div className="flex items-center">
                <Brain className="h-5 w-5 mr-2 text-primary" />
                <span>AI Integration</span>
              </div>
            </div>
            <div className="flex gap-4">
              <Button size="lg">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Contact Me
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:block"
          >
            <FloatingLaptop />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
