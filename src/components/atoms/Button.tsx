import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline";
}

export const Button = ({
    className,
    variant = "primary",
    children,
    ...props
}: ButtonProps) => {
    return (
        <button
            className={cn(
                "relative inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-transparent disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed",
                variant === "primary" &&
                "bg-sky-500/10 text-sky-400 border border-sky-500/20 hover:bg-sky-500/20 hover:shadow-[0_0_20px_rgba(14,165,233,0.3)] backdrop-blur-sm",
                variant === "secondary" &&
                "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20 backdrop-blur-sm",
                variant === "outline" && "border border-white/20 text-white hover:bg-white/5",
                className
            )}
            {...props}
        >
            {/* Glossy sheen */}
            <span className="absolute inset-0 -z-10 bg-gradient-to-br from-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            {children}
        </button>
    );
};
