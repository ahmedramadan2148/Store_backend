/* Replace with your SQL commands */

create extension  if not exists "uuid-ossp";
create table order_product(
    id uuid default uuid_generate_v1() primary key,
    order_id uuid default uuid_generate_v1(),
    product_id uuid default uuid_generate_v1(),
    quantity integer not null,
    foreign key (product_id) references product(id) on delete cascade,
    foreign key (order_id) references orders(id) on delete cascade
    
);