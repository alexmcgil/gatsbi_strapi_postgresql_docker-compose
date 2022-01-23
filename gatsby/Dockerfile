FROM node:alpine
WORKDIR /app

WORKDIR /app/

COPY package.json .
RUN npm update
RUN npm install

COPY . .

CMD [ "npm", "run", "develop" ]
