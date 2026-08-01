import { Link } from "@/i18n/navigation";

import type { FooterMenuProps } from "../types/footer.types";

export default function FooterMenu({ group }: FooterMenuProps) {
  return (
    <nav aria-label={group.title} className="min-w-0">
      <h2 className="m-0! text-[22px] font-bold leading-tight text-[#274760] sm:text-[24px]">
        {group.title}
      </h2>

      <div className="mt-4 h-[3px] w-12 bg-[linear-gradient(90deg,#00A4E4,#0077B6)]" />

      <ul className="mt-7! mb-0! flex list-none! flex-col gap-4 p-0!">
        {group.items.map((item) => (
          <li key={item.key} className="m-0! list-none!">
            <Link
              href={item.href}
              className="group inline-flex items-center gap-3 text-[14px] leading-6 text-[#274760]/80 no-underline! transition-colors duration-200 hover:text-[#0077B6] sm:text-[15px]"
            >
              <span className="h-px w-3 bg-[#2F80C8]/50 transition-all duration-200 group-hover:w-5 group-hover:bg-[#0077B6]" />

              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
