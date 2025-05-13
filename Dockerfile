FROM node:23-alpine AS base
WORKDIR /app

FROM base AS backend
COPY ./backend/package.json .
RUN npm install
COPY ./backend .
EXPOSE 8080
CMD ["npm", "start"]

FROM base AS frontend
COPY ./frontend/package.json .
RUN npm install
COPY ./frontend .
EXPOSE 3000
CMD ["npm", "run", "dev"]