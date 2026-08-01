import type { FooterContactProps } from "../types/footer.types";

import FooterIcon from "./FooterIcon";

export default function FooterContact({ items }: FooterContactProps) {
  return (
    <ul className="m-0! flex list-none! flex-col gap-4 p-0!">
      {items.map((item) => (
        <li key={item.key} className="m-0! list-none!">
          <a
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            className="group flex items-start gap-4 text-[#274760] no-underline! transition-colors duration-200 hover:text-[#0077B6]"
          >
            <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center bg-[#2F80C8] text-white transition-colors duration-200 group-hover:bg-[#0077B6]">
              <FooterIcon name={item.icon} className="size-[18px]" />
            </span>

            <span className="min-w-0 pt-1 text-[14px] leading-6 sm:text-[15px] sm:leading-7">
              {item.label}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
