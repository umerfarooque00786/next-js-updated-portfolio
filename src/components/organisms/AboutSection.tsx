"use client";

import { Container } from "@/components/atoms/Container";
import { GlassCard } from "@/components/atoms/GlassCard";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Code2, Cpu, Globe, Palette, ShoppingCart, Blocks } from "lucide-react";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const skills = [
    {
        icon: <Code2 className="h-8 w-8 text-sky-400" />,
        title: "Modern Web Development",
        description: "Expertise in React, Next.js, and TypeScript to build scalable applications."
    },
    {
        icon: <Palette className="h-8 w-8 text-purple-400" />,
        title: "UI/UX Design",
        description: "Creating liquid glass aesthetics with Tailwind CSS and Framer Motion."
    },
    {
        icon: <Cpu className="h-8 w-8 text-pink-400" />,
        title: "Backend Integration",
        description: "Connecting complex data layers with performance and security in mind."
    },
    {
        icon: <Globe className="h-8 w-8 text-indigo-400" />,
        title: "Global Deployment",
        description: "Experience launching products reaching thousands of users worldwide."
    },
    {
        icon: <ShoppingCart className="h-8 w-8 text-green-400" />,
        title: "E-commerce Platforms",
        description: "Expert in WordPress, Shopify, and WooCommerce for online stores."
    },
    {
        icon: <Blocks className="h-8 w-8 text-orange-400" />,
        title: "No-Code Solutions",
        description: "Building professional sites with Shopify, Wix, Webflow, and custom WordPress themes."
    }
];

export const AboutSection = () => {
    const headingRef = useScrollReveal();
    const textRef = useScrollReveal();
    const imageRef = useScrollReveal();

    return (
        <section id="about" className="pt-20 pb-10 relative overflow-hidden">
            <div className="absolute right-0 top-1/2 w-96 h-96 bg-sky-500/10 rounded-full blur-[128px]" />

            <Container>
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <div ref={headingRef} className="scroll-reveal">
                            <Heading size="xl" className="mb-6">
                                About Me
                            </Heading>
                        </div>
                        <div ref={textRef} className="scroll-reveal">
                            <Text className="mb-6">
                                I am a passionate Full Stack Developer with a keen eye for detail and a drive for perfection.
                                With extensive experience in the modern web stack, I bridge the gap between design and engineering.
                            </Text>
                            <Text className="mb-8">
                                My approach focuses on &quot;Liquid Glass&quot; aesthetics—creating interfaces that feel translucent, deep, and alive.
                                I believe software should not only function flawlessly but also delight the user with every interaction.
                            </Text>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {skills.map((skill, index) => (
                                <GlassCard key={index} className="p-3 hover:border-sky-500/30 transition-colors">
                                    <div className="mb-4">{skill.icon}</div>
                                    <h3 className="text-xl font-bold text-white mb-2">{skill.title}</h3>
                                    <Text size="sm">{skill.description}</Text>
                                </GlassCard>
                            ))}
                        </div>
                    </div>

                    <div ref={imageRef} className="scroll-reveal mt-16 lg:mt-0 relative w-full max-w-lg mx-auto lg:max-w-none">
                        <div className="absolute inset-0 bg-sky-500/20 rounded-full blur-3xl -z-10 animate-pulse" />
                        <div className="relative aspect-[3/4] w-full">
                            <img
                                src="/images/professional.png"
                                alt="Umer - Professional"
                                className="w-full h-full object-cover rounded-2xl glass border border-white/10 shadow-2xl"
                            />
                        </div>
                    </div>
                </div>

                {/* Education - full-width section aligned with content above */}
                <div className="mt-24 pt-16 border-t border-white/10">
                    <Heading size="lg" className="mb-6">
                        Education
                    </Heading>
                    <GlassCard className="p-3 md:p-8 relative overflow-hidden group w-full">
                        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">
                                    Bachelor in Information Technology
                                </h3>
                                <p className="text-sky-400 font-medium mb-2">
                                    Sindh Agriculture University
                                </p>
                                <div className="flex items-center gap-4 text-sm text-gray-400">
                                    <span>2019 - 2023</span>
                                    <span className="w-1 h-1 bg-gray-600 rounded-full" />
                                    <span>CGPA: 3.5+</span>
                                </div>
                            </div>
                            <a
href="/resume/Umer-Farooque-updated-Resume-2026.pdf"
                                    download="Umer-Farooque-updated-Resume-2026.pdf"
                                className="inline-flex items-center gap-2 shrink-0 text-sky-400 hover:text-sky-300 font-medium transition-colors"
                            >
                                <span>Download Resume</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                            </a>
                        </div>
                    </GlassCard>
                </div>
            </Container>
        </section>
    );
};
