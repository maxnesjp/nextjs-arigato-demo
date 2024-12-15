import FilterList from "@/components/filter";
import { sorting } from "@/lib/constants";
import React, { ReactNode } from "react";
import notFound from "../not-found";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import Collections from "@/components/search/collections";

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

const layout = async ({ children, params }: Props) => {
  const { locale } = await params;
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);
  return (
    <>
      <div className="mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 pb-4 text-black md:flex-row dark:text-white">
        <div className="order-first w-full flex-none md:max-w-[125px]">
          <Collections />
        </div>
        <div className="order-last min-h-screen w-full md:order-none">
          {children}
        </div>
        <div className="order-none flex-none md:order-last md:w-[125px]">
          <FilterList list={sorting} title="Sort by" />
        </div>
      </div>
    </>
  );
};

export default layout;
