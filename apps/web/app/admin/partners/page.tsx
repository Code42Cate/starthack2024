import { columns } from "@/components/admin/partners/columns";
import { DataTable } from "@/components/admin/partners/data-table";
import { prisma } from "database";

async function getPartners() {
  const partners = await prisma.partner.findMany({ orderBy: { id: "asc" } });

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
