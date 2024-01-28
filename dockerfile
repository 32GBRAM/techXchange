FROM mhart/alpine-node

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE proces.env.PORT

CMD ["node", "index.js"]



