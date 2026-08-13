FROM node:22.22.2-alpine
WORKDIR /app
RUN apk update && apk upgrade 
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]