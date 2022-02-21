# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
#### Products
- Index 
- Show
- Create [token required]


#### Users
- Index [token required]
- Show [token required]
- Create N[token required]

#### Orders
- Current Order by user (args: user id)[token required]


## Data Shapes
#### User
- id : string generate uuid 
- firstName :string
- lastName :string
- password :string
- lastName :string
- email :string
#### Product
-  id --> string generate uuid 
-  name --> string
-  price --> number



#### Orders
- id string generate uuid 
- user_id :uuid
- status -->string
#### order_product
- quantity   :number
- product_id :string generate uuid 
- order_id   :string generate uuid 


## create users Table  
```
create extension  if not exists "uuid-ossp";
create table users(
    id uuid default uuid_generate_v1() primary key ,
    userName varchar(50) not null,
    firstName varchar(50) not null,
    lastName varchar(50) not null,
    email varchar(50) not null unique,
    password varchar(250) not null
);
 ```

## create product Table 
```
create extension  if not exists "uuid-ossp";
create table product(
    id uuid default uuid_generate_v1() primary key ,
    prodName varchar(50) not null,
    price integer not null
)
```
## create orders Table

```
create extension  if not exists "uuid-ossp";
create table orders (
    id uuid default uuid_generate_v1() primary key ,
    user_id uuid default uuid_generate_v1() not null,
    status varchar(50) not null,
    foreign key (user_id) references users(id) on delete cascade
);
```
## create order_product Table 
```
create table order_product(
    id uuid default uuid_generate_v1() primary key,
    order_id uuid default uuid_generate_v1(),
    product_id uuid default uuid_generate_v1(),
    quantity integer not null,
    foreign key (product_id) references product(id) on delete cascade,
    foreign key (order_id) references orders(id) on delete cascade
    
);
```
