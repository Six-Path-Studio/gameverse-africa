FROM node:18.6.0-alpine3.15 as builder
WORKDIR /build
ADD . .
RUN npm install
RUN npm run build

FROM php:fpm-alpine3.14
WORKDIR /public
COPY --from=builder /build/dist /public
CMD [ "sh", "-c", "php -S 0.0.0.0:4343" ]