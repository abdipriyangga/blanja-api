# BLANJA - API
========================================================================

### Tentang Project ini
Project ini dibuat untuk proses latihan dalam menerapkan expressJS dan postman untuk melakukan testing.

#### Projek ini dibangun dengan teknologi
- [Express JS](https://expressjs.com/en/starter/hello-world.html)
- [Node JS](https://nodejs.org/en/about/)
- [Postman](https://www.postman.com/)
- [MySql](https://www.mysql.com/)

### Endpoint
##### Get
- /products
- /product/{id}
- /search
- /search?name
- /search/category
- /transaction

##### POST
- /product/{id}
- /transaction

##### PUT
- /product/{id}

##### Delete
- /product/{id}

#### Syarat Menjalankan Program 
- [NPM](https://www.npmjs.com/)
    > npm install npm@latest -g

### Getting Started
Panduan untuk menjalankan di local

#### How to Install

- Clone Repository
    > git clone `https://github.com/abdipriyangga/blanja-api.git`

- Install Express JS, MySql, and Morgan with Npm
    > npm i express mysql morgan
and you will get a folder > node_modules

- MySQL Configuration
create your database in phpMyAdmin and setting configuration `/src/configs/myDB.js`

#### Usage 
`node index.js` or `nodemon` or `npm start`
And run this with `localhost:3000` to view in the browser

`##### Project ini masih mengalami bug terkait feature yang belum terselesaikan`

