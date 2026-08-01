import type { FooterSocialProps } from "../types/footer.types";

import FooterIcon from "./FooterIcon";

export default function FooterSocial({ items, ariaLabel }: FooterSocialProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <nav aria-label={ariaLabel}>
      <div className="flex flex-wrap items-center gap-3">
        {items.map((item) => (
          <a
            key={item.key}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            title={item.label}
            className="group flex size-11 items-center justify-center border border-[#2474B8]/20 bg-white/50 text-[#2474B8] no-underline! shadow-[0_6px_18px_rgba(18,59,86,0.08)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#2474B8] hover:bg-[#2474B8] hover:text-white hover:shadow-[0_12px_25px_rgba(18,59,86,0.13)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#0077B6] motion-reduce:transform-none motion-reduce:transition-none"
          >
            <FooterIcon
              name={item.icon}
              className="size-[17px] transition-transform duration-300 group-hover:scale-110"
            />
          </a>
        ))}
      </div>
    </nav>
  );
}
