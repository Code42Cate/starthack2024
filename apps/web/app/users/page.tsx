import { columns } from "@/components/columns";
import { DataTable } from "@/components/data-table";
import { PrismaClient } from "database";

const client = new PrismaClient();

async function getData() {
  const users = await client.user.findMany();

  return users;
}

export default async function Page() {
  const data = await getData();

  return (
    <main className="flex flex-col items-center py-4">
      <DataTable columns={columns} data={data} />
    </main>
  );
}
