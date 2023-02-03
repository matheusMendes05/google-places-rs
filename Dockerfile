FROM node:14.20.1

WORKDIR /usr

COPY package.json ./
COPY tsconfig.json ./

COPY src ./src
RUN ls -a
RUN npm install
RUN npm run build

EXPOSE 80

CMD ["npm","run","dev"]
