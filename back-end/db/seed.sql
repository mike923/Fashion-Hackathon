DROP DATABASE if exists fashionhackathon;
CREATE DATABASE fashionhackathon;

\c fashionhackathon;

-- DROP TABLE IF EXISTS materials_used;
-- DROP TABLE IF EXISTS manufacture_design;
-- DROP TABLE IF EXISTS materials;
-- DROP TABLE IF EXISTS designs;
-- DROP TABLE IF EXISTS users;
-- DROP TABLE IF EXISTS types;

CREATE TABLE types (
   id SERIAL PRIMARY KEY,
   account_type VARCHAR NOT NULL UNIQUE
);

CREATE TABLE users (
   id SERIAL PRIMARY KEY,
   username VARCHAR NOT NULL UNIQUE,
   password_digest VARCHAR NOT NULL,
   email VARCHAR NOT NULL
   -- type_id INT NOT NULL REFERENCES types(id)
);

CREATE TABLE designs (
   id SERIAL PRIMARY KEY,
   design_file VARCHAR UNIQUE NOT NULL,
   color VARCHAR NOT NULL,
   pattern VARCHAR NOT NULL,
   height INT NOT NULL,
   width INT NOT NULL,
   designer_id INT NOT NULL REFERENCES users(id)
);

CREATE TABLE materials (
   id SERIAL PRIMARY KEY,
   material VARCHAR NOT NULL UNIQUE
);

CREATE TABLE manufacturer (
   id SERIAL PRIMARY KEY,
   manufacturer_name VARCHAR NOT NULL,
   specialty VARCHAR NOT NULL
);

CREATE TABLE manufacturer_design (
   id SERIAL PRIMARY KEY,
   manufacturer_id INT NOT NULL REFERENCES manufacturer(id),
   product_id INT NOT NULL REFERENCES designs(id)
);

CREATE TABLE materials_used (
   id SERIAL PRIMARY KEY,
   manufacture_design_id INT NOT NULL REFERENCES manufacturer_design(id),
   material_id INT NOT NULL REFERENCES materials(id),
   percentage_used INT NOT NULL
);

INSERT INTO  
   users (username,password_digest,email) 
VALUES
   ('Test','$2b$12$9XYzDmcZjnK2npJSe6msQenecn6.iZFUIEQSU3U7Zp/ObIHWMV8Z2','testing@email.com');

INSERT INTO 
   designs (design_file,color,pattern,height ,width ,designer_id )
VALUES
   ('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4wRrSyDHTs_93veLkgHiN-PCowkeHZjP-HkfoJungVXYRKm1W', 'yellow', 'plain', 10, 15, 1);


INSERT INTO 
   materials(material) 
VALUES 
   ('cotton'),
   ('wool'),
   ('silk'),
   ('polyester'),
   ('rayon');

INSERT INTO 
   manufacturer (manufacturer_name,specialty) 
VALUES
   ('Cotton emporium.','we do all things wool and cotton'),
   ('Leather','Leather good');


INSERT INTO 
   manufacturer_design(manufacturer_id,product_id) 
VALUES 
   (1,1);


INSERT INTO 
   materials_used (manufacture_design_id,material_id,percentage_used) 
VALUES 
   (1,1,20);


