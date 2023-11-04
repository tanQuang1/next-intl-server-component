import React from "react";
import type { Metadata } from "next";

import Link from "next/link";
import getAllUsers from "@/app/lib/getAllUser";
import { useTranslations } from "next-intl";
import Content from "./content";

export const metadata: Metadata = {
  title: "Users",
  description: "This is page all users",
};

export default async function UsersPage() {
  const usersData: Promise<UserType[]> = await getAllUsers();
  const users = await usersData;
  return <Content users={users} />;
}
