-- Prior to using: create Kedama and customerFacing tables in SQL


-- Create Kedama products table
create table products (
id int auto_increment,
name varchar(255) not null,
description varchar(255) not null,
category varchar(255) not null,
price decimal(15,2) not null,
primary key (id));

-- Kedama "products" table starter data
INSERT INTO products
(name, description, category, price)
VALUES('Pastel Sweater', 'A sweater featuring beautiful pastel colors', 'Outerwear', 29.99);
INSERT INTO products
(name, description, category, price)
VALUES('Pink Jeans', 'Bold jeans with shocking pink denim', 'Bottoms', 49.99);

-- Create Kedama "customerFacing" table
create table customerFacing (
id int auto_increment,
name varchar(255) not null,
description varchar(255) not null,
price decimal(15,2) not null,
primary key (id));

-- Kedama "customerFacing" table start data
INSERT INTO customerFacing
(name, description, price)
VALUES('Pastel Sweater', 'A sweater featuring beautiful pastel colors', 29.99);
INSERT INTO customerFacing
(name, description, price)
VALUES('Pink Jeans', 'Bold jeans with shocking pink denim', 49.99);
