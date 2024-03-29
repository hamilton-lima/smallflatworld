# prepare builder
FROM node:16.13.2 as builder

RUN mkdir -p /usr/src/app
RUN mkdir -p /usr/src/app/web
RUN mkdir -p /usr/src/app/server

# install web dependencies
COPY web/package.json /usr/src/app/web
WORKDIR /usr/src/app/web
RUN yarn install

# install server dependencies
COPY server/package.json /usr/src/app/server
WORKDIR /usr/src/app/server
RUN yarn install

# copy source files
COPY . /usr/src/app

# set web version
WORKDIR /usr/src/app/web
RUN ./node_modules/.bin/hbs --data package.json src/app/version.hbs --stdout > src/app/version.ts

ENV PATH /usr/src/app/node_modules/.bin:$PATH
RUN ./node_modules/.bin/ng build --configuration production

# base image
FROM nginx:alpine
COPY --from=builder /usr/src/app/web/dist/web /usr/share/nginx/html

# TODO: add server as a service

RUN ls -alh /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
