import Kanban from "@/components/admin/requests/kanban";
import { prisma } from "database";

async function getCheckouts() {
  const checkouts = await prisma.checkout.findMany({
    take: 5,
    include: {
      founder: true,
    },
    where: {
      founderId: 21,
    },
    orderBy: { createdAt: "desc" },
  });

  return checkouts;
}

export default async function Page() {
  const checkouts = await getCheckouts();

  const requests = checkouts.map((checkout) => {
    return {
      id: checkout.Id.toString(),
      text: checkout.actionItems[0],
      date: checkout.createdAt.toDateString(),
      avatar: checkout.founder.avatarUrl,
      status: "Needs Review",
    };
  });

  return (
    <div className="flex flex-col rounded-lg border-neutral-500 bg-white p-4 shadow-md">
      <div className="flex min-h-[700px] flex-row justify-between">
        <Kanban baseRequests={requests} />
      </div>
    </div>
  );
}
