import Image from "next/image";
import Link from "next/link";

import { useTranslations } from "next-intl";
import { locales } from "../constants";
export default function Home() {
  const t = useTranslations();
  return (
    <main>
      <h1>{process.env.my_env}</h1>
      <h1>{t("title")}</h1>
      <h1>Home Page</h1>
      <br />

      <p>
        <Link href="/users">Users</Link>
      </p>
    </main>
  );
}

export function generateStaticParams() {
  return locales;
}
