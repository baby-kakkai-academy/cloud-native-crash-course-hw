FROM node:14
WORKDIR /usr/src/app
COPY package*.json index.js ./
RUN npm install
EXPOSE 8021
CMD ["node", "index.js"]