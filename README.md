# START Fellowship / Hackasaurus Rex Submission

The aim of this project is to unify data management, communication, registration, and analysis for the START Fellowship program. The project is built with Next.js, Prisma, and PostgreSQL, and OpenAI.

## Features

- Manage START Fellowship applications in Kanban board
- Manage START Fellowship team mates
- View and analyze START Fellows
- Automatically extract action items from spoken founder updates
- Quarterly reminder emails to update the startups data
- Apply to Fellowship with a form
- View and managed own requests
- Public startup directory
- Public partner directory

## Tech Stack

- Next.js (React)
- Prisma (ORM)
- PostgreSQL (Database)
- OpenAI GPT4 + WHISPER (API)
- TailwindCSS (Styling)
- Turborepo (Monorepo)
- ShadcnUI (Styling)
- Resend.com (Emails)
- Render.com (Hosting)

## Development

To get started, you will need to have Node.js (v21) and pnpm (v8) installed. After cloning, run the following command:

```bash
pnpm install
```

You will then have to create an `.env.local` file in `/apps/web/` and add the following:

```bash
DATABASE_URL=...
OPENAI_API_KEY=....
```

If you decide to use the docker-compose file to host postgres, you can use `DATABASE_URL=postgres://postgres:postgres@localhost:5433/postgres`

### Commands

A bunch of commands are available to you:

```bash
pnpm run dev --filter web # Start the web app
pnpm run dev db:push --filter database # Push the database schema to the database
pnpm run dev db:seed --filter database # Seed the database with some data
pnpm run dev db:generate --filter database # Generate the Prisma client
```

## Deployment

Both the web app and database are currently deployed on render.com. If you decide to deploy, you can use the IaC blueprint in `render.yaml` to deploy everything with a single click:

```yaml
services:
  - type: web
    name: starthack2024
    runtime: node
    buildCommand: pnpm install --filter web && pnpm run build --filter web
    startCommand: pnpm run start --filter web
databases:
  - name: hackasaurusrex
    region: frankfurt
    plan: standard
    databaseName: starthack
    postgresMajorVersion: 15
```

## Architecture

This is the diagram of the database. You can also find the schema in `/packages/database/schema.prisma`

![](./diagram.png)

## Screenshots

![Dashboard](./screenshots/dashboard.png)

![Directory](./screenshots/directory.png")

![Application 1](./screenshots/apply1.png")

![Application 2](./screenshots/apply2.png")

![Application 3](./screenshots/apply3.png")

![Application 4](./screenshots/apply4.png")

![Checkout](./screenshots/checkout.png")

![Applications](./screenshots/applications.png")

![Team Management](./screenshots/team.png")

![Add Teammate](./screenshots/addteammate.png")

## License

No License. Please do not use this project for commercial purposes without permission :)
