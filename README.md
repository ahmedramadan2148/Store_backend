# Store_backend
REQUIREMENT.md is contain the database description and schema 

# End Point
## end point of users module 
 
  ### GET 
  > http://localhost:3000/api/users        for get all users
  ###
  > http://localhost:3000/api/users/:id    for get one user
  ### POST
  > http://localhost:3000/api/users/      for create user
  ###
  > http://localhost:3000/api/users/auth/ for authenticate user
  ### DELETE
  > http://localhost:3000/api/users/:id  for delete user
  ### PATCH 
  > http://localhost:3000/api/users/:id for update user 
 
## end point of product module 
   ### GET 
   >  http://localhost:3000/api/product/      for get all product
   ###
   >  http://localhost:3000/api/product/:id   for get one product 
   
   ### POST 
   > http://localhost:3000/api/product/  for create product
   ### DELETE 
  > http://localhost:3000/api/product/:id  for delete product
## end point of orders module  
  ### GET 
  > http://localhost:3000/api/order/:id  for get current product 
  ### POST
  > http://localhost:3000/api/product/  for create product

### Setup Database
* connect to default postgres databse as server root user 
> psql -U postgres
* in psql run this to create user 
> CREATE USER ahmed WITH PASSWORD 'moon'
* in psql run the following 
> CREATE DATABASE StoreDb;
###
> CREATE DATABASE StoreDb_test;
###
* connect to the database and grant all privileges
### grant for Store_dev
 > \c StoreDb
 ###
 > GRANT ALL PREVILEGES ON DATABASE Store_dev TO ahmed;
### grant for Store_test
 > \c StoreDb_test
 ###
 > GRANT ALL PREVILEGES ON DATABASE Store_test TO ahmed;
## database schema result of run 
![schema](https://user-images.githubusercontent.com/95978415/154973635-e321c3a9-3db0-49e9-bb2d-e4faf3491b8c.PNG)
## ENV varaibles
```
PORT = 3000
DB_DEV=StoreDb
DB_PORT = 5432
DB_USER =ahmed
DB_HOST =localhost
DB_PASSWORD=moon
DB_TEST =StoreDb_test

NODE_DEV = dev

BYCRYPT_PASSWORD=123password

SALT=10
TOKEN= token_secret
```


## setup and run 
#### server run on port 3000
 > http://localhost:3000
#### devolopment
> npm run start
## test run
> npm run test

## Pakages 
### typescript
  > npm i typescript
### express
 > npm i express 
###
 > npm i --save-dev @types/express
### jsonwebtoken
 > npm i jsonwebtoken

### db-migrate
 > npm i -g db-migrate
 ###
 > npm i -g db-migrate-pg
 ###
 > npm i pg
 ###
 > npm i -save-dev @types/pg
 ###
 > npm i --save-dev @types/jsonwebtoken
### jasmine 
> npm i jasmine 
###
> npm i --save-dev @types/jasmine
### morgan 
> npm i morgan
###
> npm i --save-dev morgan

