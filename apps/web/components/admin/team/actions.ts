"use server";
import { prisma } from "database";

export async function addTeammate(formData: FormData) {
  await prisma.admin.create({
    data: {
      avatarUrl: "/avatar.png",
      email: formData.get("email").toString(),
      firstName: formData.get("firstname").toString(),
      position: formData.get("position").toString(),
      lastName: formData.get("lastname").toString(),
    },
  });
}

export async function updateTeammate(formData: FormData) {
  await prisma.admin.update({
    where: {
      Id: parseInt(formData.get("id").toString()),
    },
    data: {
      email: formData.get("email").toString(),
      firstName: formData.get("firstname").toString(),
      position: formData.get("position").toString(),
      lastName: formData.get("lastname").toString(),
    },
  });
}

export async function deleteTeammate(id: number) {
  await prisma.admin.delete({
    where: {
      Id: id,
    },
  });
}
