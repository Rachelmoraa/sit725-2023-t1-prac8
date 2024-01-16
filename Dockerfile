FROM node:alpine
WORKDIR /app
ENV PORT=4000
ADD package*.json ./
RUN npm install
ADD . .
EXPOSE 4000
CMD npm start
