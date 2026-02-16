"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/atoms/Button";
import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const LINE1 = "Hi, I'm Umer.";
const LINE2 = "I Build Things for the Web";

const TYPING_SPEED = 140;
const PAUSE_AFTER_LINE1 = 900;

export const HeroSection = () => {
    const [display1, setDisplay1] = useState("");
    const [display2, setDisplay2] = useState("");
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        let i1 = 0;
        let i2 = 0;
        let timeout: ReturnType<typeof setTimeout>;

        const typeLine1 = () => {
            if (i1 <= LINE1.length) {
                setDisplay1(LINE1.slice(0, i1));
                i1++;
                timeout = setTimeout(typeLine1, TYPING_SPEED);
            } else {
                timeout = setTimeout(() => {
                    i2 = 0;
                    typeLine2();
                }, PAUSE_AFTER_LINE1);
            }
        };

        const typeLine2 = () => {
            if (i2 <= LINE2.length) {
                setDisplay2(LINE2.slice(0, i2));
                i2++;
                timeout = setTimeout(typeLine2, TYPING_SPEED);
            }
        };

        timeout = setTimeout(typeLine1, 400);

        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        const t = setInterval(() => setShowCursor((c) => !c), 530);
        return () => clearInterval(t);
    }, []);

    return (
        <section
            className="relative min-h-[100dvh] min-h-screen flex items-center justify-center pt-20 pb-16 px-4 overflow-hidden"
            aria-label="Hero"
        >
            {/* Background: original liquid orbs only — no image */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] animate-[pulse_8s_infinite]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-600/20 rounded-full blur-[128px] animate-[pulse_10s_infinite_reverse]" />
            </div>

            <Container className="relative z-10 text-center max-w-4xl">
                <Heading as="h1" size="xl" className="mb-4 sm:mb-6 text-balance min-h-[1.2em] sm:min-h-[1.4em]">
                    <span className="text-white">
                        {display1}
                        <span className={`inline-block w-0.5 h-[0.9em] align-baseline bg-white ml-0.5 transition-opacity duration-150 ${showCursor && display2 === "" ? "opacity-100" : "opacity-0"}`} aria-hidden />
                    </span>
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-400 to-pink-400">
                        {display2}
                        <span
                            className={`inline-block w-[3px] h-[0.85em] align-middle bg-sky-400 ml-0.5 rounded-sm transition-opacity duration-150 ${showCursor && display2.length > 0 ? "opacity-100" : "opacity-0"}`}
                            aria-hidden
                        />
                    </span>
                </Heading>

                <Text
                    size="lg"
                    className="mx-auto max-w-2xl mb-8 sm:mb-10 text-gray-300 leading-relaxed text-pretty text-base sm:text-lg"
                >
                    Full-stack developer crafting fast, scalable apps and beautiful interfaces.
                    Laravel, WordPress, React & Next.js — from idea to launch.
                </Text>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                    <Link href="/projects">
                        <Button variant="primary" className="group w-full sm:w-auto">
                            View Projects
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                    <a
                        href="/resume/Umer-Farooque-Resume.pdf"
                        download="Umer-Farooque-Resume.pdf"
                        className="w-full sm:w-auto"
                    >
                        <Button variant="outline" className="w-full sm:w-auto">
                            Download Resume
                        </Button>
                    </a>
                </div>
            </Container>
        </section>
    );
}
