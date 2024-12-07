"use client";

import { useState, useEffect } from "react";
import { Menu, X, Code2, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Code2 className="h-8 w-8" />
            <span className="ml-2 text-xl font-bold">nextCoderSubha</span>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="#about" className="hover:text-primary">
              About
            </a>
            <a href="#skills" className="hover:text-primary">
              Skills
            </a>
            <a href="#projects" className="hover:text-primary">
              Projects
            </a>
            <a href="#contact" className="hover:text-primary">
              Contact
            </a>
            <Button variant="outline" size="icon">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon">
              <Linkedin className="h-5 w-5" />
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#about" className="block px-3 py-2 hover:text-primary">
              About
            </a>
            <a href="#skills" className="block px-3 py-2 hover:text-primary">
              Skills
            </a>
            <a href="#projects" className="block px-3 py-2 hover:text-primary">
              Projects
            </a>
            <a href="#contact" className="block px-3 py-2 hover:text-primary">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
