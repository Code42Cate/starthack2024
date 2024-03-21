import Kanban from "@/components/admin/applications/kanban";
import { prisma } from "database";

async function getStartups() {
  const startups = await prisma.startup.findMany({
    where: {
      fellowStatus: {
        in: ["Pending", "Rejected"],
      },
    },
  });
  return startups;
}

export default async function Page() {
  const startups = await getStartups();

  const applications = startups.map((startup) => ({
    id: startup.id,
    text: startup.name,
    date: startup.foundingDate.toDateString(),
    avatar: startup.logoUrl,
    // 50% chance to make it "Awaiting Answer" for testing purposes
    status:
      startup.fellowStatus === "Pending"
        ? Math.random() > 0.7
          ? "Awaiting Answer"
          : "Pending"
        : startup.fellowStatus,
  }));

  return (
    <div className="flex min-h-[700px] flex-row justify-between">
      <Kanban baseApplications={applications} />
    </div>
  );
}
