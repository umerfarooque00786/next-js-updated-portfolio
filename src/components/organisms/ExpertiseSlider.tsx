"use client";

const CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

/* simpleicons.org CDN – Shopify & Wix logos (reliable fallback when devicon fails) */
const SIMPLE_ICONS = "https://cdn.simpleicons.org";

const EXPERTISE: { name: string; icon: string }[] = [
  { name: "Laravel", icon: `${CDN}/laravel/laravel-original.svg` },
  { name: "WordPress", icon: `${CDN}/wordpress/wordpress-original.svg` },
  { name: "Tailwind CSS", icon: `${CDN}/tailwindcss/tailwindcss-original.svg` },
  { name: "Bootstrap", icon: `${CDN}/bootstrap/bootstrap-original.svg` },
  { name: "Shopify", icon: `${SIMPLE_ICONS}/shopify/96bf48` },
  { name: "Wix", icon: `${SIMPLE_ICONS}/wix/0C6EFC` },
  { name: "React", icon: `${CDN}/react/react-original.svg` },
  { name: "Next.js", icon: `${CDN}/nextjs/nextjs-original.svg` },
  { name: "TypeScript", icon: `${CDN}/typescript/typescript-original.svg` },
  { name: "JavaScript", icon: `${CDN}/javascript/javascript-original.svg` },
];

function Track() {
  return (
    <div className="flex items-center gap-12 shrink-0 px-4">
      {EXPERTISE.map((item) => (
        <div
          key={item.name}
          className="flex flex-col items-center gap-2 shrink-0 w-24 opacity-90 transition-opacity hover:opacity-100"
        >
          <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-2.5">
            <img
              src={item.icon}
              alt={item.name}
              className="w-9 h-9 object-contain"
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
                const span = (e.target as HTMLImageElement).nextElementSibling;
                if (span) (span as HTMLElement).style.display = "block";
              }}
            />
            <span className="text-lg font-semibold text-gray-400 hidden" aria-hidden>
              {item.name.slice(0, 1)}
            </span>
          </div>
          <span className="text-xs font-medium text-gray-400 whitespace-nowrap">{item.name}</span>
        </div>
      ))}
    </div>
  );
}

export const ExpertiseSlider = () => {
  return (
    <section className=" overflow-hidden">
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee w-max">
          <Track />
          <Track />
        </div>
      </div>
    </section>
  );
};
