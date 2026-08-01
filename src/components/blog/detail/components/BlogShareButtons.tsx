"use client";

import { useState } from "react";

import type { BlogShareButtonsProps } from "../types/blog-detail.types";

type ShareIconName = "facebook" | "linkedin" | "whatsapp" | "copy";

export default function BlogShareButtons({
  articleTitle,
  articleUrl,
  labels,
}: BlogShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(articleUrl);

  const encodedTitle = encodeURIComponent(articleTitle);

  async function copyArticleUrl() {
    try {
      await navigator.clipboard.writeText(articleUrl);

      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="mr-1 text-sm font-semibold text-[#57778C]">
        {labels.title}
      </span>

      <ShareLink
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        label={labels.facebook}
        icon="facebook"
      />

      <ShareLink
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        label={labels.linkedin}
        icon="linkedin"
      />

      <ShareLink
        href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
        label={labels.whatsapp}
        icon="whatsapp"
      />

      <button
        type="button"
        onClick={copyArticleUrl}
        aria-label={copied ? labels.copied : labels.copy}
        title={copied ? labels.copied : labels.copy}
        className="flex size-11 cursor-pointer items-center justify-center border border-[#CFE3EC] bg-white text-[#0077B6] transition-all duration-200 hover:border-[#0077B6] hover:bg-[#EAF7FC]"
      >
        <ShareIcon name="copy" className="size-[18px]" />
      </button>

      {copied && (
        <span role="status" className="text-xs font-semibold text-[#167848]">
          {labels.copied}
        </span>
      )}
    </div>
  );
}

type ShareLinkProps = {
  href: string;
  label: string;
  icon: Exclude<ShareIconName, "copy">;
};

function ShareLink({ href, label, icon }: ShareLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="flex size-11 items-center justify-center border border-[#CFE3EC] bg-white text-[#0077B6]! no-underline! transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0077B6] hover:bg-[#0077B6] hover:text-white!"
    >
      <ShareIcon name={icon} className="size-[18px]" />
    </a>
  );
}

function ShareIcon({
  name,
  className,
}: {
  name: ShareIconName;
  className?: string;
}) {
  const commonProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true,
    className,
  };

  switch (name) {
    case "facebook":
      return (
        <svg {...commonProps}>
          <path
            d="M14 8h3V4.5c-.5-.1-1.8-.2-3.4-.2C10.4 4.3 8 6.3 8 10v2H5v4h3v8h4v-8h3.3l.7-4H12v-1.6C12 8.9 12.4 8 14 8Z"
            fill="currentColor"
          />
        </svg>
      );

    case "linkedin":
      return (
        <svg {...commonProps}>
          <path
            d="M6.2 8.5H2.6V20h3.6V8.5ZM4.4 3A2.1 2.1 0 1 0 4.4 7.2 2.1 2.1 0 0 0 4.4 3ZM20.8 13.4c0-3.5-1.9-5.2-4.4-5.2a4 4 0 0 0-3.6 2v-1.7H9.2V20h3.6v-5.7c0-1.5.3-3 2.2-3 1.9 0 1.9 1.7 1.9 3.1V20h3.6l.3-6.6Z"
            fill="currentColor"
          />
        </svg>
      );

    case "whatsapp":
      return (
        <svg {...commonProps}>
          <path
            d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.5 4.1 1.6 5.9L.2 24l6.5-1.7c1.7.9 3.6 1.4 5.5 1.4 6.5 0 11.8-5.3 11.8-11.8 0-3.1-1.3-6.1-3.5-8.4Zm-8.3 18.2c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.9 1 1-3.8-.2-.4a9.8 9.8 0 1 1 8.5 4.8Zm5.4-7.4c-.3-.1-1.8-.9-2.1-1-.3-.1-.5-.1-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-1.8-.9-3-1.6-4.2-3.7-.3-.6.3-.5.9-1.7.1-.2.1-.5 0-.7-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.3 1.4 3.6c.2.2 2.4 3.7 5.9 5.2.8.4 1.5.6 2 .7.8.3 1.6.2 2.2.1.7-.1 1.8-.7 2.1-1.5.3-.7.3-1.3.2-1.5-.1-.2-.3-.3-.6-.4Z"
            fill="currentColor"
          />
        </svg>
      );

    case "copy":
      return (
        <svg {...commonProps}>
          <rect
            x="8"
            y="8"
            width="11"
            height="11"
            stroke="currentColor"
            strokeWidth="1.8"
          />

          <path
            d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </svg>
      );

    default:
      return null;
  }
}
