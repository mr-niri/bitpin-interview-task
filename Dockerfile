FROM node:lts-alpine AS base
WORKDIR /app
COPY . /app

FROM base AS build
ARG MODE=$MODE
RUN npm i -g pnpm
RUN pnpm install --ignore-scripts 
RUN pnpm build:${MODE}

FROM nginx:alpine-slim
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d
