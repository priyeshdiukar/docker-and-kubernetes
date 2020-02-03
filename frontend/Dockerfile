FROM node:alpine as builder
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx
# Deploying on AWS mapping is not done by default. Hence we need to expose the port as mentioned below.
# When ElasticBeanStalk tries to run the docker file, it will 'expose' the port automatically.
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html