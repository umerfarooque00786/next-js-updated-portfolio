import { Container } from "@/components/atoms/Container";
import { Logo } from "@/components/atoms/Logo";
import { Text } from "@/components/atoms/Text";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const WhatsAppIcon = ({ size = 20 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

export const Footer = () => {
    return (
        <footer className="border-t border-white/10 bg-black/50 backdrop-blur-md pt-16 pb-8">
            <Container>
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-12">
                    <div className="col-span-1 lg:col-span-2">
                        <Logo className="mb-6" />
                        <Text className="max-w-sm">
                            Crafting digital experiences with a focus on liquid aesthetics and human-centered design.
                        </Text>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-6">Navigation</h3>
                        <ul className="space-y-4">
                            <li><Link href="#about" className="text-gray-400 hover:text-sky-400 transition-colors">About</Link></li>
                            <li><Link href="#projects" className="text-gray-400 hover:text-sky-400 transition-colors">Projects</Link></li>
                            <li><Link href="#contact" className="text-gray-400 hover:text-sky-400 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-6">Socials</h3>
                        <div className="flex gap-4">
                            <Link href="https://github.com/umerfarooque00786" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-sky-500/20 hover:text-sky-400 transition-colors" aria-label="GitHub"><Github size={20} /></Link>
                            <Link href="https://www.linkedin.com/in/umer-farooq-296252272" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-sky-500/20 hover:text-sky-400 transition-colors" aria-label="LinkedIn"><Linkedin size={20} /></Link>
                            <Link href="https://wa.me/923003024283" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-sky-500/20 hover:text-sky-400 transition-colors" aria-label="WhatsApp"><WhatsAppIcon size={20} /></Link>
                            <Link href="mailto:umerfarooqkk4@gmail.com" className="p-2 rounded-full bg-white/5 hover:bg-sky-500/20 hover:text-sky-400 transition-colors" aria-label="Email"><Mail size={20} /></Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center">
                    <Text size="sm">&copy; {new Date().getFullYear()} Umer. All rights reserved.</Text>
                </div>
            </Container>
        </footer>
    );
};
