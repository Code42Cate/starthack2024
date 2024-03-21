import { columns } from "@/components/admin/fellows/columns";
import { DataTable } from "@/components/admin/fellows/data-table";
import { prisma } from "database";

async function getStartups() {
  const startups = await prisma.startup.findMany({
    orderBy: { id: "asc" },
    where: {
      fellowStatus: {
        in: ["Fellow", "Alumni"],
      },
    },
  });

  return startups;
}

export default async function FellowsPage() {
  const data = await getStartups();

  return (
    <div className="">
      <h1 className="text-xl font-bold">Fellows + Alumni</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
