FROM node:14.15.4
FROM alpine:3.9.3

WORKDIR /build

COPY . .

RUN npm ci
RUN npm run build

RUN npm i -g serve

EXPOSE 5000

CMD ["serve", "-s", "dist"]







