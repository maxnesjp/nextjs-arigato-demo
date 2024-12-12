import {createNavigation} from 'next-intl/navigation';
import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'ja'],
  defaultLocale: 'en',
  pathnames: {
    '/': '/',
    '/arigatoCorp': {
      en: '/arigatoCorp',
      ja: '/arigatoCorp'
    }, 
    '/cnc': {
      en: '/cnc',
      ja: '/cnc'
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