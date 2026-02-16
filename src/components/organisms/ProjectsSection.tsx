"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { Button } from "@/components/atoms/Button";
import { ProjectCard } from "@/components/molecules/ProjectCard";
import { projects, getProjectStack, type ProjectStack } from "@/data/projects";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight, Layout, FileCode } from "lucide-react";

const LOAD_MORE_COUNT = 6;
const TABS: { id: ProjectStack; label: string; icon: React.ReactNode }[] = [
  { id: "laravel", label: "Laravel", icon: <FileCode className="h-4 w-4" /> },
  { id: "wordpress", label: "WordPress", icon: <Layout className="h-4 w-4" /> },
];

type ProjectsSectionProps = {
  /** Home: show limited with Load more. Projects page: leave undefined to show all. */
  initialCount?: number;
};

export const ProjectsSection = ({ initialCount }: ProjectsSectionProps) => {
  const headingRef = useScrollReveal();
  const showAll = initialCount == null;

  const { laravelProjects, wordpressProjects } = useMemo(() => {
    const laravel = projects.filter((p) => getProjectStack(p) === "laravel");
    const wordpress = projects.filter((p) => getProjectStack(p) === "wordpress");
    return { laravelProjects: laravel, wordpressProjects: wordpress };
  }, []);

  const [activeTab, setActiveTab] = useState<ProjectStack>("laravel");
  const [visibleLaravel, setVisibleLaravel] = useState(
    showAll ? laravelProjects.length : Math.min(initialCount ?? 6, laravelProjects.length)
  );
  const [visibleWordpress, setVisibleWordpress] = useState(
    showAll ? wordpressProjects.length : Math.min(initialCount ?? 6, wordpressProjects.length)
  );

  const currentProjects =
    activeTab === "laravel"
      ? laravelProjects.slice(0, visibleLaravel)
      : wordpressProjects.slice(0, visibleWordpress);
  const currentTotal = activeTab === "laravel" ? visibleLaravel : visibleWordpress;
  const currentMax = activeTab === "laravel" ? laravelProjects.length : wordpressProjects.length;
  const hasMore = currentTotal < currentMax;

  const handleLoadMore = () => {
    if (activeTab === "laravel") {
      setVisibleLaravel((c) => Math.min(c + LOAD_MORE_COUNT, laravelProjects.length));
    } else {
      setVisibleWordpress((c) => Math.min(c + LOAD_MORE_COUNT, wordpressProjects.length));
    }
  };

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

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-12 border-b border-white/10 pb-px">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-t-lg font-medium transition-colors ${
                activeTab === tab.id
                  ? "bg-white/10 text-white border-b-2 border-sky-400 -mb-px"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {tab.icon}
              {tab.label}
              <span className="text-xs opacity-80">
                ({tab.id === "laravel" ? laravelProjects.length : wordpressProjects.length})
              </span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {currentProjects.map((project) => (
            <div key={project.id} className="h-full">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {currentProjects.length === 0 && (
          <p className="text-center text-gray-400 py-12">No projects in this category yet.</p>
        )}

        {!showAll && currentProjects.length > 0 && (
          <div className="mt-12 text-center">
            {hasMore ? (
              <Button variant="outline" onClick={handleLoadMore} className="gap-2">
                Load more
                <ArrowRight className="h-4 w-4" />
              </Button>
            ) : (
              <Link href="/projects">
                <Button variant="outline" className="gap-2">
                  View all projects
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            )}
          </div>
        )}
      </Container>
    </section>
  );
};
