"use client";

import { Container } from "@/components/atoms/Container";
import { Logo } from "@/components/atoms/Logo";
import { NavItem } from "@/components/molecules/NavItem";
import { AuthButtons } from "@/components/molecules/AuthButtons";
import { navLinks } from "@/data/navLinks";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                scrolled ? "bg-black/50 backdrop-blur-md border-white/10 py-4" : "bg-transparent py-6"
            )}
        >
            <Container className="flex items-center justify-between">
                <Logo />

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <NavItem key={link.name} href={link.href} name={link.name} />
                    ))}
                </nav>

                {/* Auth Buttons - Desktop */}
                <div className="hidden md:block">
                    <AuthButtons />
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white hover:text-sky-400 transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </Container>

            {/* Mobile Nav Overlay */}
            <div
                className={cn(
                    "absolute top-full left-0 w-full bg-zinc-950/95 backdrop-blur-md border-t border-white/10 transition-all duration-300 md:hidden overflow-hidden",
                    isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                )}
            >
                <Container className="flex flex-col gap-6 py-8">
                    {navLinks.map((link) => (
                        <NavItem key={link.name} href={link.href} name={link.name} />
                    ))}
                    <div className="pt-4 border-t border-white/10">
                        <AuthButtons />
                    </div>
                </Container>
            </div>
        </header>
    );
};
