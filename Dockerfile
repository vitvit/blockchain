FROM node:6

VOLUME /blockchain-demo

WORKDIR /blockchain-demo

ENTRYPOINT node src/blockchain-demo.js

EXPOSE 3001
