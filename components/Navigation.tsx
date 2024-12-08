import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";
import NavigationLink from "./NavigationLink";
import { Suspense } from "react";
import Search, { SearchSkeleton } from "./navbar/search";
import LogoSquare from "./logo-square";
import MobileMenu from "./navbar/mobile-menu";

const { SITE_NAME } = process.env;

export default function Navigation() {
  const t = useTranslations("Navigation");

  return (
    <div className="text-sm text-neutral-500 dark:text-neutral-400 bg-gray-800 text-white">
      <nav className="relative flex items-center justify-between p-4 lg:px-6">
        <div className="block flex-none md:hidden">
          <Suspense fallback={null}>
            <MobileMenu />
          </Suspense>
        </div>
        <div className="flex w-full items-center">
          <div className="flex w-full md:w-1/3">
            <NavigationLink
              href="/"
              prefetch={true}
              className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
            >
              <LogoSquare />
              <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
                {SITE_NAME}
              </div>
            </NavigationLink>
            <NavigationLink
              href="/arigatoCorp"
              prefetch={true}
              className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
            >
              <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
                Arigato Corp
              </div>
            </NavigationLink>
            <NavigationLink
              href="/cnc"
              prefetch={true}
              className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
            >
              <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
                CNC
              </div>
            </NavigationLink>
          </div>
          <div className="hidden justify-center md:flex md:w-1/3">
            <Suspense fallback={<SearchSkeleton />}>
              <Search />
            </Suspense>
          </div>
          <div className="hidden justify-center md:flex md:w-1/3">
            <LocaleSwitcher />
          </div>
        </div>
      </nav>
    </div>
  );
}
