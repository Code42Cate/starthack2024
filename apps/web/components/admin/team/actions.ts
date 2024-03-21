"use server";

import { PrismaClient } from "database";

const client = new PrismaClient();

export async function addTeammate(formData: FormData) {
  await client.admin.create({
    data: {
      avatarUrl: "/avatar.png",
      email: formData.get("email").toString(),
      firstName: formData.get("firstname").toString(),
      position: formData.get("position").toString(),
      lastName: formData.get("lastname").toString(),
    },
  });
}
