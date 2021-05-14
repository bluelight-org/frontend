FROM node:14.15.4

WORKDIR /build

COPY . .

RUN yarn install
RUN yarn build

RUN npm i -g serve

EXPOSE 5000

CMD ["serve", "-s", "dist"]







