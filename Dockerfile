FROM node:6

VOLUME /blockchain-demo

WORKDIR /blockchain-demo

ENTRYPOINT node src

EXPOSE 3001