FROM node:20.16.0
WORKDIR /app/
COPY ./package.json /app/
RUN npm install