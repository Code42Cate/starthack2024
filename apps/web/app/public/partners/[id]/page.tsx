import { prisma } from "database";

async function getPartner(id: number) {
  const partner = await prisma.partner.findFirst({
    where: {
      id,
    },
  });

  return partner;
}

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const partner = await getPartner(Number(id));

  return <div className="">{partner.name}</div>;
}
