# build ===============================
FROM node:10 as build

WORKDIR /sample-xt

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# run ===============================
FROM node:10-alpine as run

WORKDIR /sample-xt

COPY --from=build /sample-xt .

EXPOSE 3000

CMD ["npm", "run", "start:prod"]
