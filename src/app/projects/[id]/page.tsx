"use client";

import { useParams, useRouter } from "next/navigation";
import { projects } from "@/data/projects";
import { Container } from "@/components/atoms/Container";
import { GlassCard } from "@/components/atoms/GlassCard";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Button } from "@/components/atoms/Button";
import { ArrowLeft, ExternalLink, Calendar, User, FolderOpen, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function ProjectDetailPage() {
    const params = useParams();
    const router = useRouter();
    const projectId = params.id as string;

    const project = projects.find((p) => p.id === projectId);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center py-24">
                <Container className="text-center">
                    <Heading size="xl" className="mb-4">
                        Project Not Found
                    </Heading>
                    <Text className="mb-8">The project you&apos;re looking for doesn&apos;t exist.</Text>
                    <Link href="/projects">
                        <Button variant="primary">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Projects
                        </Button>
                    </Link>
                </Container>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-24">
            <Container>
                {/* Back Button */}
                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-gray-400 hover:text-sky-400 transition-colors mb-8"
                >
                    <ArrowLeft className="h-4 w-4" />
                    <span>Back to Projects</span>
                </button>

                {/* Hero Section */}
                <div className="mb-12">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                        {project.tags?.map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 text-xs font-medium rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <Heading size="xl" className="mb-4">
                        {project.title}
                    </Heading>

                    <Text size="lg" className="mb-6 max-w-3xl">
                        {project.fullDescription || project.description}
                    </Text>

                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex"
                    >
                        <Button variant="primary" className="group">
                            Visit Live Site
                            <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </a>
                </div>

                {/* Main Image */}
                <GlassCard className="p-0 mb-12 overflow-hidden">
                    <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-auto object-cover"
                    />
                </GlassCard>

                {/* Project Info Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {project.duration && (
                        <GlassCard className="p-6">
                            <div className="flex items-center gap-3 mb-2">
                                <Calendar className="h-5 w-5 text-sky-400" />
                                <h3 className="font-semibold text-white">Duration</h3>
                            </div>
                            <Text>{project.duration}</Text>
                        </GlassCard>
                    )}

                    {project.role && (
                        <GlassCard className="p-6">
                            <div className="flex items-center gap-3 mb-2">
                                <User className="h-5 w-5 text-purple-400" />
                                <h3 className="font-semibold text-white">Role</h3>
                            </div>
                            <Text>{project.role}</Text>
                        </GlassCard>
                    )}

                    {project.category && (
                        <GlassCard className="p-6">
                            <div className="flex items-center gap-3 mb-2">
                                <FolderOpen className="h-5 w-5 text-pink-400" />
                                <h3 className="font-semibold text-white">Category</h3>
                            </div>
                            <Text>{project.category}</Text>
                        </GlassCard>
                    )}
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left Column - Details */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Scope */}
                        {project.scope && project.scope.length > 0 && (
                            <GlassCard className="p-8">
                                <Heading size="md" className="mb-6">
                                    Project Scope
                                </Heading>
                                <ul className="space-y-3">
                                    {project.scope.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <CheckCircle2 className="h-5 w-5 text-sky-400 mt-0.5 flex-shrink-0" />
                                            <Text>{item}</Text>
                                        </li>
                                    ))}
                                </ul>
                            </GlassCard>
                        )}

                        {/* Features */}
                        {project.features && project.features.length > 0 && (
                            <GlassCard className="p-8">
                                <Heading size="md" className="mb-6">
                                    Key Features
                                </Heading>
                                <ul className="space-y-3">
                                    {project.features.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <CheckCircle2 className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                                            <Text>{feature}</Text>
                                        </li>
                                    ))}
                                </ul>
                            </GlassCard>
                        )}

                        {/* Gallery */}
                        {project.gallery && project.gallery.length > 0 && (
                            <div>
                                <Heading size="md" className="mb-6">
                                    Project Gallery
                                </Heading>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {project.gallery.map((image, index) => (
                                        <GlassCard key={index} className="p-0 overflow-hidden">
                                            <img
                                                src={image}
                                                alt={`${project.title} screenshot ${index + 1}`}
                                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                                            />
                                        </GlassCard>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right Column - Sidebar */}
                    <div className="space-y-8">
                        <GlassCard className="p-8 sticky top-24">
                            {project.techStack && project.techStack.length > 0 && (
                                <div className="mb-8 pb-8 border-b border-white/10">
                                    <Heading size="md" className="mb-6">
                                        Tech Stack
                                    </Heading>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-4 py-2 text-sm font-medium rounded-lg bg-white/5 text-gray-300 border border-white/10 hover:border-sky-500/30 transition-colors"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div>
                                <Heading size="md" className="mb-4">
                                    Project Actions
                                </Heading>
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block"
                                >
                                    <Button variant="outline" className="w-full group">
                                        View Live Project
                                        <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Button>
                                </a>
                            </div>
                        </GlassCard>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-16">
                    <GlassCard className="p-12 text-center">
                        <Heading size="lg" className="mb-4">
                            Interested in Similar Work?
                        </Heading>
                        <Text className="mb-8 max-w-2xl mx-auto">
                            I&apos;m available for freelance projects and open to new opportunities.
                            Let&apos;s discuss how we can work together.
                        </Text>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link href="/contact">
                                <Button variant="primary">Get in Touch</Button>
                            </Link>
                            <Link href="/projects">
                                <Button variant="outline">View More Projects</Button>
                            </Link>
                        </div>
                    </GlassCard>
                </div>
            </Container>
        </div>
    );
}
