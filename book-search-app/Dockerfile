FROM node:20
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build
ENV NEXT_PUBLIC_SERVER_URL=http://localhost:8000
EXPOSE 3000
CMD ["npm", "start"]
