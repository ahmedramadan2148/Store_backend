/* Replace with your SQL commands */
create extension  if not exists "uuid-ossp";
create table orders (
    id uuid default uuid_generate_v1() primary key ,
    user_id uuid default uuid_generate_v1() not null,
    status varchar(50) not null,
    foreign key (user_id) references users(id) on delete cascade
);

