"use client";

import { Button } from "@/components/atoms/Button";
import { Container } from "@/components/atoms/Container";
import { GlassCard } from "@/components/atoms/GlassCard";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const WhatsAppIcon = ({ size = 24 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

const contactLinks = [
    {
        label: "Email",
        href: "mailto:umerfarooqkk4@gmail.com",
        value: "umerfarooqkk4@gmail.com",
        icon: <Mail className="h-6 w-6 text-sky-400" />,
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/umer-farooq-296252272",
        value: "umer-farooq-296252272",
        icon: <Linkedin className="h-6 w-6 text-sky-400" />,
    },
    {
        label: "GitHub",
        href: "https://github.com/umerfarooque00786",
        value: "github.com/umerfarooque00786",
        icon: <Github className="h-6 w-6 text-sky-400" />,
    },
    {
        label: "WhatsApp",
        href: "https://wa.me/923003024283",
        value: "+92 300 3024283",
        icon: <span className="text-sky-400"><WhatsAppIcon size={24} /></span>,
    },
];

export const ContactSection = () => {
    const cardRef = useScrollReveal();
    const infoRef = useScrollReveal();

    return (
        <section id="contact" className=" pb-20 relative overflow-hidden">
            <div className="absolute left-1/4 top-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-[128px]" />
            <div className="absolute right-1/4 bottom-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px]" />

            <Container className="relative z-10 max-w-6xl">
                <div ref={cardRef} className="scroll-reveal text-center mb-16">
                    <Heading size="xl" className="mb-4">
                        Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-400">Touch</span>
                    </Heading>
                    <Text size="lg" className="max-w-2xl mx-auto text-gray-300">
                        I&apos;m available for freelance projects and new opportunities. Drop a message or reach out directly—I&apos;ll get back soon.
                    </Text>
                </div>

                <div className="grid lg:grid-cols-2 gap-10 items-start">
                    {/* Contact info cards */}
                    <div ref={infoRef} className="scroll-reveal space-y-4">
                        <h3 className="text-lg font-semibold text-white mb-6">Reach me directly</h3>
                        {contactLinks.map((item) => (
                            <Link key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}>
                                <GlassCard className="mb-4 p-5 flex items-center gap-4 hover:border-sky-500/30 transition-colors group">
                                    <div className="shrink-0 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-sky-500/10 transition-colors">
                                        {item.icon}
                                    </div>
                                    <div className="min-w-0 text-left">
                                        <p className="text-sm text-gray-400">{item.label}</p>
                                        <p className="text-white font-medium truncate">{item.value}</p>
                                    </div>
                                </GlassCard>
                            </Link>
                        ))}
                    </div>

                    {/* Form */}
                    <GlassCard className="p-8 lg:p-10 border-t border-white/20">
                        <h3 className="text-lg font-semibold text-white mb-2">Send a message</h3>
                        <Text size="sm" className="text-gray-400 mb-6">
                            Prefer email? Fill the form and I&apos;ll reply to your inbox.
                        </Text>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="contact-email" className="block text-sm font-medium text-gray-400 mb-1">Your Email</label>
                                <input
                                    type="email"
                                    id="contact-email"
                                    className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 transition-all"
                                    placeholder="you@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="contact-message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                                <textarea
                                    id="contact-message"
                                    rows={4}
                                    className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 transition-all resize-none"
                                    placeholder="Tell me about your project or idea..."
                                />
                            </div>
                            <Button type="submit" className="w-full">Send Message</Button>
                        </form>
                    </GlassCard>
                </div>
            </Container>
        </section>
    );
};
