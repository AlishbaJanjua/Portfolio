"use client";

import { useState, type ComponentProps, type ReactNode } from "react";
import { site } from "@/data/site";

const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(site.email)}`;

type EmailLinkProps = Omit<ComponentProps<"a">, "href" | "children"> & {
  children: ReactNode;
  copiedLabel?: ReactNode;
};

export function EmailLink({
  className,
  children,
  copiedLabel = "Copied!",
  onClick,
  ...props
}: EmailLinkProps) {
  const [copied, setCopied] = useState(false);

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard may be unavailable; Gmail compose still opens in a new tab.
    }
  };

  return (
    <a
      href={gmailComposeUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={className}
      title={site.email}
      {...props}
    >
      {copied ? copiedLabel : children}
    </a>
  );
}
