# Boilerplate Express Rest API Server (CRUD) with mock user data.

---

## Get started

### Install dependencies

`npm install`

---

## Run the app

#### Without Nodemon

`DEBUG=express-crud:* npm start`

#### With Nodemon

`DEBUG=express-crud:* npm run devstart`

#### With Nodemon and environment variables (eg. passing a PORT)

`PORT=5000 DEBUG=express-crud:* npm run devstart`

---

## Hit Enpoint

### User format

`{ id: 0, first_name: 'Care', last_name: 'Engledow', email: 'cengledow0@php.net', gender: 'Male'}`

### Users Endpoints

`/api/users`
`/api/users/:userId`
