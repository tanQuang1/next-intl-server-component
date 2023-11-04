import getAllPostUser from "@/app/lib/getAllPostUser";
import getDetailUser from "@/app/lib/getDetailUser";
import React, { Suspense } from "react";
import PostUser from "./components/PostUser";
import type { Metadata } from "next";
import getAllUsers from "@/app/lib/getAllUser";
import { notFound } from "next/navigation";
import { useTranslations } from "next-intl";
import { cookies } from "next/headers";

type ParamsType = {
  params: {
    id: string;
  };
};
export async function generateMetadata({
  params: { id },
}: ParamsType): Promise<Metadata> {
  const userData: Promise<UserType> = await getDetailUser(id);

  const user = await userData;

  if (!user) {
    return {
      title: "User not found",
    };
  }
  return {
    title: user.name,
    description: `This is the page of ${user.name}`,
  };
}
export default async function DetailUser({ params: { id } }: ParamsType) {
  // const t = useTranslations();
  const userData: Promise<UserType> = await getDetailUser(id);
  const postData: Promise<PostType[]> = await getAllPostUser(id);

  const user = await userData;

  if (!user) return notFound();
  return (
    <>
      {/* <h1>{t("title")}</h1> */}
      <h2>{user.name}</h2>

      <br />
      <Suspense fallback={<h2>Loading...</h2>}>
        <PostUser promisePosts={postData} />
      </Suspense>
    </>
  );
}

export async function generateStaticParams() {
  const usersData: Promise<UserType[]> = await getAllUsers();

  const users = await usersData;
  return users.map((user) => ({
    id: user.id.toString(),
  }));
}
