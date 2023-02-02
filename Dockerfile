FROM node:14.19.1

WORKDIR /

ADD . .

RUN rm -rf /src

RUN npm install

#RUN npm run build

RUN ls -a

WORKDIR /
 
EXPOSE 3333
 
CMD [ "npm", "run" , "start"]