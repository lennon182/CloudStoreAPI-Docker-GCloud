# 🔥 CloudStoreAPI-Docker-GCloud v0.0.1 🐳

## 🔥 API Documentation: <br><br>

### [CloudStoreAPI-GCloud-Docker-Documentation](https://documenter.getpostman.com/view/14701319/TWDajuoN)

### https://documenter.getpostman.com/view/14701319/TWDajuoN

<br>

## 🔥 Tech's:

<br>

    - TypeScript
    - NodeJs
    - MongoDB
    - JWT

    dependencies": {
    "bcrypt": "^5.0.0",
    "cors": "^2.8.5",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^5.11.13"}

<br>

<br>

## 🔥 Test it run:

<br>
First:

    - create .env file like this:
        PORT=
        PUBLIC_PORT=
        DB_URI=mongodb://mongo/eivanmtzleal-apistore
        JWT_KEY=

Next:

- `docker-compose build`

- `docker-compose up -d`

#

## 🔥 Features:

<br>

### 🟢 Docker 🐳:

    - Dockerfile
    - docker-compose.yml
    - cloudbuild.yml
        - This file for continuous deployment on Google cloud

### 🟢 Thow Containers:

    1.  ApiStore: Node From typeScript Source
        - Container name: node-server-store
        - Source production in "dist" folder
        - Exposed Port: 3000
        - Exposed PublicPort: 3500

    2.  MongoDB
        - Container name: mongo
        - Exposed Port: 27017
        - Exposed PublicPort: 27017
        - Persist Data in Volumen: ./mongo/data:/data/db

<br>

### 🔥 MIDDLEWARES based on JWT Tokens

<br>

### 🟢 AUTH

    - Register Store Admin
    - Login Store Admin
    - Register Customers in App
    - Login Customers in App

### 🟢 USERS

    - Create Users Based Roles
    - Get Users
    - Get One User
    - Update Users
    - Delete Users

### 🟢 PRODUCTS

    - Get Products
    - Get One Product
    - Create Products Based Roles
    - Update Products Based Roles
    - Delete Products Based Roles

### 🟢 ORDERS

    - Get Orders Based Roles
    - Get One Orders Based Roles
    - Create Orders Based Roles
    - Update Orders Based Roles
    - Delete Orders Based Roles

### 🟢 CUSTOMERS

    - Get Customers Based Roles
    - Get One Customers Based Roles
    - Create Customers Based Roles
    - Update Customers Based Roles
    - Delete Customers Based Roles

### 🟢 ROLES (not implemented)

    - Get Customers Based Roles
    - Get One Customers Based Roles
    - Create Customers Based Roles
    - Update Customers Based Roles
    - Delete Customers Based Roles
