FROM node:22.22.2-alpine

WORKDIR /app

RUN apk update && apk upgrade

COPY package.json package-lock.json ./

RUN npm ci --omit=dev

COPY . .

# npm is only required to install dependencies.
# It is not required to run the Node.js application.
RUN rm -rf /usr/local/lib/node_modules/npm \
    /usr/local/bin/npm \
    /usr/local/bin/npx

EXPOSE 3000

CMD ["node", "server.js"]