import { clsx } from "clsx";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ReactNode } from "react";
import Navigation from "@/components/Navigation";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: ReactNode;
  locale: string;
};

export default async function BaseLayout({ children, locale }: Props) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const c = await locale;
  const messages = await getMessages();

  return (
    <html className="h-full" lang={c}>
      <body
        className={clsx(inter.className, "flex h-full flex-col bg-slate-900")}
      >
        <NextIntlClientProvider messages={messages}>
          <Navigation />

          <main className="flex-grow px-5 py-2">{children}</main>
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
