FROM node:14.15.4

WORKDIR /build

COPY . .

RUN npm ci
RUN npm run build

RUN npm i -g serve

EXPOSE 5000

CMD ["serve", "-s", "dist"]







