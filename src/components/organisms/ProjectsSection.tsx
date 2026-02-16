"use client";

import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { ProjectCard } from "@/components/molecules/ProjectCard";
import { projects } from "@/data/projects";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const ProjectsSection = () => {
    const headingRef = useScrollReveal();

    return (
        <section id="projects" className="py-24 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-900/5 to-transparent -z-10" />
            <Container>
                <div ref={headingRef} className="scroll-reveal mb-16 text-center">
                    <Heading size="xl" className="mb-4">
                        Featured Projects
                    </Heading>
                    <p className="max-w-2xl mx-auto text-gray-400">
                        A selection of projects I&apos;ve worked on, ranging from high-performance marketing sites to complex web applications.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <div key={project.id} className="h-full">
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};
