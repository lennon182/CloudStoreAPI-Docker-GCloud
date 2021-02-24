FROM node

# FROM .env IF USE CLOUDBUILD
# ENV DB_URI= ${DB_URI}
# ENV JWT_KEY= ${JWT_KEY}
# ENV PORT=${PORT}
# ENV PUBLIC_PORT=${PUBLIC_PORT}

RUN mkdir -p /app/server-store

WORKDIR /app/server-store

COPY package*.json ./

COPY ./dist ./

RUN npm install

EXPOSE 3000

CMD ["node", "index.js"]