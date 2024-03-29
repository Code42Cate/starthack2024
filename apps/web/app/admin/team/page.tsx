import { columns } from "@/components/admin/team/columns";
import { DataTable } from "@/components/admin/team/data-table";
import { prisma } from "database";

async function getTeammates() {
  const teammates = await prisma.admin.findMany({ orderBy: { Id: "asc" } });

  return teammates;
}

export default async function TeamPage() {
  const data = await getTeammates();

  return (
    <div className="">
      <h1 className="text-xl font-bold">Team</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
