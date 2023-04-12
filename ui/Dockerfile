FROM node:slim AS builder
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
# COPY package-lock.json ./
# RUN npm ci --silent
RUN npm i
COPY . ./
RUN npm run build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf *
COPY --from=builder /app/build .
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000

ENTRYPOINT ["nginx", "-g", "daemon off;"]
