CREATE TABLE stock(
brand_name text not null,
color text not null,
size int not null,
unit_price int not null,
count serial ,
id serial primary key
);

CREATE TABLE cart(
brand_id int not null,
units_sold int not null,
total_cost int not null,
FOREIGN KEY (brand_id) REFERENCES stock (id)
);

CREATE TABLE brands(
brand_name text not null,
color text not null,
size int not null,
unit_price int not null,
id serial primary key
);

INSERT INTO brands (brand_name, color,size, unit_price) VALUES ('Addidas', 'Grey', 1, 10);
INSERT INTO brands (brand_name, color,size, unit_price) VALUES ('Addidas', 'Blue', 1, 10);
INSERT INTO brands (brand_name, color,size, unit_price) VALUES ('Addidas', 'Green', 1, 10);
INSERT INTO brands (brand_name, color,size, unit_price) VALUES ('Addidas', 'Orange', 1, 10);

INSERT INTO brands (brand_name, color,size, unit_price) VALUES ('Nike', 'Grey', 1, 10);
INSERT INTO brands (brand_name, color,size, unit_price) VALUES ('Nike', 'Blue', 1, 10);
INSERT INTO brands (brand_name, color,size, unit_price) VALUES ('Nike', 'Green', 1, 10);
INSERT INTO brands (brand_name, color,size, unit_price) VALUES ('Nike', 'Orange', 1, 10);

INSERT INTO brands (brand_name, color,size, unit_price) VALUES ('Vans', 'Grey', 1, 10);
INSERT INTO brands (brand_name, color,size, unit_price) VALUES ('Vans', 'Blue', 1, 10);
INSERT INTO brands (brand_name, color,size, unit_price) VALUES ('Vans', 'Green', 1, 10);
INSERT INTO brands (brand_name, color,size, unit_price) VALUES ('Vans', 'Orange', 1, 10);

INSERT INTO brands (brand_name, color,size, unit_price) VALUES ('Puma', 'Grey', 1, 10);
INSERT INTO brands (brand_name, color,size, unit_price) VALUES ('Puma', 'Blue', 1, 10);
INSERT INTO brands (brand_name, color,size, unit_price) VALUES ('Puma', 'Green', 1, 10);
INSERT INTO brands (brand_name, color,size, unit_price) VALUES ('Puma', 'Orange', 1, 10);

INSERT INTO brands (brand_name, color,size, unit_price) VALUES ('Balenciaga', 'Grey', 1, 10);
INSERT INTO brands (brand_name, color,size, unit_price) VALUES ('Balenciaga', 'Blue', 1, 10);
INSERT INTO brands (brand_name, color,size, unit_price) VALUES ('Balenciaga', 'Green', 1, 10);
INSERT INTO brands (brand_name, color,size, unit_price) VALUES ('Balenciaga', 'Orange', 1, 10);

INSERT INTO brands (brand_name, color,size, unit_price) VALUES ('Batu', 'Grey', 1, 10);
INSERT INTO brands (brand_name, color,size, unit_price) VALUES ('Batu', 'Blue', 1, 10);
INSERT INTO brands (brand_name, color,size, unit_price) VALUES ('Batu', 'Green', 1, 10);
INSERT INTO brands (brand_name, color,size, unit_price) VALUES ('Batu', 'Orange', 1, 10);




