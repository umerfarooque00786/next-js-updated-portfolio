"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavItemProps {
    href: string;
    name: string;
}

export const NavItem = ({ href, name }: NavItemProps) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={cn(
                "relative text-sm font-medium transition-colors hover:text-sky-400",
                isActive ? "text-sky-400" : "text-gray-300"
            )}
        >
            {name}
            {isActive && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-sky-400 to-purple-400 rounded-full" />
            )}
        </Link>
    );
};
