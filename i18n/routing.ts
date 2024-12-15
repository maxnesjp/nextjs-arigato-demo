import {createNavigation} from 'next-intl/navigation';
import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'ja'],
  defaultLocale: 'en',
  pathnames: {
    '/': '/',
    '/search/jay': {
      en: '/search/jay',
      ja: '/search/jay'
    }, 
    '/search/cnc': {
      en: '/search/cnc',
      ja: '/search/cnc'
    },
    '/products': {
      en: '/products',
      ja: '/products'
    }
  }
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const {Link, getPathname, redirect, usePathname, useRouter} =
  createNavigation(routing);