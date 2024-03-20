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
    <main className="mx-auto my-10 flex w-fit flex-col items-center rounded-lg border-neutral-500 bg-white p-4 shadow-md">
      <DataTable columns={columns} data={data} />
    </main>
  );
}
