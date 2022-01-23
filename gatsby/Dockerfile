FROM node:alpine
WORKDIR /app

WORKDIR /app/

COPY package.json .
RUN npm update
RUN npm install
RUN npm install -g gatsby-cli

COPY . .

CMD [ "npm", "run", "develop" ]
