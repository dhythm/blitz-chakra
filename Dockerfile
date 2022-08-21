# FROM node:16.15-alpine AS base-image

# WORKDIR /opt/app

# RUN adduser -S nextjs -u 1001 -G node && \
#     chown -R nextjs:node /opt/app /root

# COPY --chown=nextjs:node package.json /opt/app/
# COPY --chown=nextjs:node package-lock.json /opt/app/

FROM ubuntu:20.04 as builder
ARG DEBIAN_FRONTEND=noninteractive
# ENV NODE_OPTIONS "--max_old_space_size=2048"

WORKDIR /app

RUN apt update && apt install -y curl nodejs npm && npm install n -g && n 16.14.2 && apt purge -y nodejs npm && apt autoremove -y
RUN apt install -y build-essential

COPY . .
RUN npm config set unsafe-perm true
RUN npm install && npm run build


FROM ubuntu:20.04 as release
ARG DEBIAN_FRONTEND=noninteractive

WORKDIR /app

RUN groupadd -g 1000 apl \
 && useradd -g apl -s /bin/bash -u 1000 -p apl apl \
 && echo 'apl ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers

RUN apt update && apt install -y curl tzdata nodejs npm && npm install n -g && n 16.14.2 && apt purge -y nodejs npm && apt autoremove -y
RUN apt install -y build-essential

COPY --chown=apl:apl tsconfig.json /app/

COPY --from=builder --chown=apl:apl /app/package.json /app/
COPY --from=builder --chown=apl:apl /app/package-lock.json /app/
COPY --from=builder --chown=apl:apl /app/db /app/db

RUN npm ci --only=prod

COPY --from=builder --chown=apl:apl /app/.next /app/.next/
COPY --from=builder --chown=apl:apl /app/public /app/public

RUN npx blitz prisma generate
COPY --from=builder --chown=apl:apl /app/.env /app/
COPY --from=builder --chown=apl:apl /app/.blitz.config.compiled.js /app/
COPY --from=builder --chown=apl:apl /app/.tsbuildinfo /app/
RUN chown -R apl:apl /app && chmod -R 755 /app/

ENV NODE_ENV production
ENV NODE_OPTIONS "--max_old_space_size=1280"
ENV TZ Asia/Tokyo

ENV SESSION_SECRET_KEY "QFNhN4R6SJfd5SwZAWixghK5D6eYmnd8"

USER apl
EXPOSE 3000
