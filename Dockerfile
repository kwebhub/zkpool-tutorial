FROM node:24-alpine

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@12.5.1 --activate
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .

EXPOSE 4321

CMD ["pnpm", "dev", "--host", "0.0.0.0"]
