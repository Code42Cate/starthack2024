import { PrismaClient } from "./index";

const client = new PrismaClient();

async function seed() {
  await client.user.create({
    data: {
      email: "ubvja@student.kit.edu",
      name: "Jonas 'Marty' Scholz",
      status: "active",
    },
  });
}

seed()
  .then(() => {
    console.log(`Successfully seeded database 🌱`);
  })
  .catch((error) => {
    console.error(error);
  });
