import { PrismaClient } from "database";

const client = new PrismaClient();

async function getPartner(id: number) {
  const partner = await client.partner.findFirst({
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
