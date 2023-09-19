FROM node:14
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY package*.json app.js /usr/src/app/
RUN npm install
EXPOSE 3000
CMD [ "node","app.js" ]