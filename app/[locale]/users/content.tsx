import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

type props = {
  users: UserType[];
};
export default function Content({ users }: props) {
  const t = useTranslations();
  const content = (
    <section>
      <h1>{t("title")}</h1>
      <h2>
        <Link href="/">Back to Home</Link>
      </h2>
      <br />
      {users.map((user: any) => {
        return (
          <>
            <p key={user.id}>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </p>
          </>
        );
      })}
    </section>
  );
  return content;
}
