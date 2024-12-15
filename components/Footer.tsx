import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Link from "next/link";

type Props = {
  locale: string;
};

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer className="text-sm text-neutral-500 dark:text-neutral-400 mt-auto py-8 bg-gray-800 text-white">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Contact Us Section */}
        <div>
          <h4 className="font-bold text-lg mb-2">{t("contactUs")}</h4>
          <p>{t("contactDescription")}</p>
          <ul className="mt-4">
            <li>
              <strong>{t("phone")}:</strong> +81 000 000 0000
            </li>
            <li>
              <strong>{t("email")}:</strong>{" "}
              <Link href="mailto:support@example.com" className="text-blue-400">
                support@example.com
              </Link>
            </li>
            <li>
              <strong>{t("ourLocation")}:</strong> 123 Example Street, City,
              Country
            </li>
            <li>
              <strong>{t("workingHours")}:</strong> {t("workingHoursDetails")}
            </li>
          </ul>
        </div>

        {/* Information Section */}
        <div>
          <h4 className="font-bold text-lg mb-2">{t("information")}</h4>
          <ul className="mt-4">
            <li>
              <Link href="/about" className="hover:text-blue-400">
                {t("aboutUs")}
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-blue-400">
                {t("privacyPolicy")}
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-blue-400">
                {t("termsOfUse")}
              </Link>
            </li>
            <li>
              <Link href="/career" className="hover:text-blue-400">
                {t("career")}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-400">
                {t("contactUsLink")}
              </Link>
            </li>
            <li>
              <Link href="/sitemap" className="hover:text-blue-400">
                {t("sitemap")}
              </Link>
            </li>
            <li>
              <Link href="/account" className="hover:text-blue-400">
                {t("myAccount")}
              </Link>
            </li>
            <li>
              <Link href="/profile" className="hover:text-blue-400">
                {t("profile")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h4 className="font-bold text-lg mb-2">{t("newsletter")}</h4>
          <p>{t("newsletterDescription")}</p>
          <form className="mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 w-full rounded border border-gray-600 mb-4"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            >
              {t("subscribe")}
            </button>
          </form>
        </div>

        {/* Social Media Section */}
        <div>
          <h4 className="font-bold text-lg mb-2">{t("followUs")}</h4>
          <p>{t("followUsDescription")}</p>
          <div className="mt-4 flex space-x-4">
            <a
              href="https://facebook.com"
              className="text-blue-500 hover:text-blue-700"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              className="text-blue-400 hover:text-blue-600"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com"
              className="text-blue-600 hover:text-blue-800"
            >
              LinkedIn
            </a>
            <a
              href="https://instagram.com"
              className="text-pink-600 hover:text-pink-800"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
