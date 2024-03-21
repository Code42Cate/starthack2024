import { columns } from "@/components/admin/fellows/columns";
import { DataTable } from "@/components/admin/fellows/data-table";
import { PrismaClient } from "database";

const client = new PrismaClient();

async function getStartups() {
  const startups = await client.startup.findMany({ orderBy: { id: "asc" } });

  return startups;
}

export default async function FellowsPage() {
  const data = await getStartups();

  return (
    <div className="">
      <h1 className="text-xl font-bold">Team</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}