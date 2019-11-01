FROM node:8.11.1

# Create app directory
RUN mkdir -p /usr/src/farmrevv-api
WORKDIR /usr/src/farmrevv-api

# Install app dependencies
COPY package.json /usr/src/farmrevv-api
RUN npm install

# Bundle app source
COPY . /usr/src/farmrevv-api

# Build arguments
ARG NODE_VERSION=8.11.1

# Environment
ENV NODE_VERSION $NODE_VERSION