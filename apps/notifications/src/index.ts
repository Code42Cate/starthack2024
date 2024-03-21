import { prisma } from "database";
import { sendEmail } from "./email";

async function notifyStartups() {
  const alumniStartups = await prisma.startup.findMany({
    where: {
      fellowStatus: "Alumni",
      companyStatus: {
        not: "Failed",
      },
    },
  });

  const currentStartups = await prisma.startup.findMany({
    where: {
      fellowStatus: "Fellow",
      companyStatus: {
        not: "Failed",
      },
    },
  });

  for (const startup of alumniStartups) {
    const founder = await prisma.founder.findFirst({
      where: {
        startupId: startup.id,
      },
    });

    await sendEmail(
      founder.email,
      "Quarterly Update Reminder",
      `Hi ${founder.firstName},

We hope you and your startup are doing well. We would love to hear about your progress and any updates you have. Please submit your quarterly update by the end of the week. If you have any questions, please reach out to us.

Best,
START Fellowship Team`,
    );
  }

  for (const startup of currentStartups) {
    const founder = await prisma.founder.findFirst({
      where: {
        startupId: startup.id,
      },
    });

    await sendEmail(
      founder.email,
      "Quarterly Update Reminder",
      `Hi ${founder.firstName},

This is a friendly reminder to submit your quarterly update for your startup. Please submit your update by the end of the week. If you have any questions, please reach out to us.

Best,
START FellowshipTeam`,
    );
  }
}

notifyStartups();
