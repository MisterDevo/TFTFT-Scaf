FROM node

MAINTAINER MisterDevo, mister.devo@gmail.com

WORKDIR /opt
COPY . /opt
RUN cd /opt && npm install
RUN npm run postinstall

EXPOSE 3000
CMD ["node", "bin/www"]
