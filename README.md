# rnnyrk starter

Starter for NextJS 14 with:

- Drizzle
- NextJS App Dir / layout nesting
- React Hook Form
- React Server Actions
- React Query
- Shadcn / Radix UI
- SQLite
- Tailwind
- TypeScript
- Zod
- Zustand

## Getting Started

```bash
git clone git@github.com:rnnyrk/rnnyrk-starter.git PROJECT_NAME
cd PROJECT_NAME && pnpm i
pnpm run db:push && pnpm dev
```

To add items to SQLite database, run `pnpm run db:studio` and use the SQLite Studio to add items to the database.

### Docker

To run this application in a Docker environment, make sure `output: standalone` is set in `next.config.js`. Install Docker cli and run `pnpm run docker:build` and `pnpm run docker:run`. Access the local server at `http://localhost:3333`.

- [Create NextJS Docker image and run on GCP](https://www.youtube.com/watch?v=Pd2tVxhFnO4)
- [Host Dokcer image on free AWS E2C tier](https://www.youtube.com/watch?v=qNIniDftAcU)
- [Hosting a Next.js Application on AWS EC2 with Docker and SSL
  ](https://medium.com/@priytamk/hosting-a-next-js-application-on-aws-ec2-with-docker-and-ssl-77643515581a)
