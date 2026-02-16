import { Button } from "@/components/atoms/Button";
import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Liquid Effects */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] animate-[pulse_8s_infinite]" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-600/20 rounded-full blur-[128px] animate-[pulse_10s_infinite_reverse]" />

            <Container className="relative z-10 text-center">
                {/* Freelance badge removed */}

                <Heading size="xl" className="mb-6">
                    Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-400">Digital Experiences</span>
                    <br /> That Defy Gravity
                </Heading>

                <Text size="lg" className="mx-auto max-w-2xl mb-10 text-gray-300 leading-relaxed">
                    Specializing in scalable full-stack applications and high-performance immersive web experiences.
                    I blend technical expertise with creative design to deliver robust, user-centric digital solutions using Next.js and Liquid Glass aesthetics.
                </Text>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="/projects">
                        <Button variant="primary" className="group">
                            View Projects
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                    <a href="/resume/Umer-Farooque-updated-Resume-2026.pdf" download="Umer-Farooque-updated-Resume-2026.pdf">
                        <Button variant="outline">
                            Download Resume
                        </Button>
                    </a>
                </div>
            </Container>
        </section>
    );
};
