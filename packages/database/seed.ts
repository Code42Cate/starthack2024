import { Founder, PrismaClient } from "./index";
import { faker } from "@faker-js/faker";

// https://fakerjs.dev/guide/usage.html

async function seed() {
  const founder: Founder = {
    city: faker.location.city(),
  };

  console.log(founder);
}

seed()
  .then(() => {
    console.log(`Successfully seeded database 🌱`);
  })
  .catch((error) => {
    console.error(error);
  });
