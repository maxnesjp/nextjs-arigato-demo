"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";
import { Link } from "@/i18n/routing";

export default function NavigationLink({
  href,
  ...rest
}: ComponentProps<typeof Link>) {
  const pathname = usePathname();

  // Normalize pathname (remove language prefix like /en/ or /ja/)
  const normalizedPathname =
    typeof pathname === "string" ? pathname.replace(/^\/[^/]+\//, "/") : "/"; // Default to "/" if pathname is not a string

  // Normalize href (check if href is a string or a UrlObject)
  const normalizedHref =
    typeof href === "string"
      ? href.replace(/^\/[^/]+\//, "/")
      : href?.pathname?.replace(/^\/[^/]+\//, "/") ?? "/"; // Safely handle UrlObject

  // Determine if the link is active
  const isActive = normalizedPathname === normalizedHref;

  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      className={clsx(
        "inline-block px-2 py-3 transition-colors",
        isActive ? "text-red-600" : "text-yellow-500 hover:text-gray-200"
      )}
      href={href}
      {...rest}
    />
  );
}
