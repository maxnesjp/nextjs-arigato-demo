import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  title: ReactNode;
};

export default function PageLayout({ children, title }: Props) {
  // Ensure params is not undefined and has a title property
  const t = title ?? "Default Title"; // Fallback if title is missing
  return (
    <div>
      <h1>{t}</h1>
      <div>{children}</div>
    </div>
  );
}
