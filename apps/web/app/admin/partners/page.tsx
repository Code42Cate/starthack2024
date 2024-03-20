import { columns } from "@/components/admin/partners/columns";
import { DataTable } from "@/components/admin/partners/data-table";
import { PrismaClient } from "database";

const client = new PrismaClient();

async function getPartners() {
  const partners = await client.partner.findMany({ orderBy: { id: "asc" } });

  return partners;
}

export default async function AdminPartnersPage() {
  const data = await getPartners();

  return (
    <div className="">
      <h1 className="text-xl font-bold">Partners</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
