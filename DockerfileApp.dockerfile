FROM node:lts-alpine3.13

RUN apk --update add postgresql-client

WORKDIR /app
COPY package.json ./

RUN npm install --silent
# COPY ./ ./
RUN ["npm", "run", "db:migrate"]
CMD ["npm", "run", "dev"]
