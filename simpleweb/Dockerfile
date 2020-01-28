FROM node:alpine

WORKDIR /usr/app

COPY ./index.js ./package.json ./
RUN npm install

CMD ["npm", "start"]
