DROP DATABASE if exists fashionhackathon;
CREATE DATABASE fashionhackathon;

\c fashionhackathon;

-- DROP TABLE IF EXISTS materials_used;
-- DROP TABLE IF EXISTS manufacture_design;
-- DROP TABLE IF EXISTS materials;
-- DROP TABLE IF EXISTS designs;
-- DROP TABLE IF EXISTS users;
-- DROP TABLE IF EXISTS types;

CREATE TABLE users (
   id SERIAL PRIMARY KEY,
   username VARCHAR NOT NULL UNIQUE,
   password_digest VARCHAR NOT NULL,
   avatar_url VARCHAR NOT NULL,
   email VARCHAR NOT NULL,
   account_type VARCHAR NOT NULL 
);

CREATE TABLE design_companies (
   id SERIAL PRIMARY KEY,
   company_name VARCHAR NOT NULL
);

CREATE TABLE designers (
   id SERIAL PRIMARY KEY,
   designer_id INT NOT NULL REFERENCES users(id),
   design_company_id INT NOT NULL REFERENCES design_companies(id)
);

CREATE TABLE manufacturers (
   id SERIAL PRIMARY KEY,
   manufacturer_name VARCHAR NOT NULL,
   specialty VARCHAR NOT NULL
);

CREATE TABLE manufacture_employee (
   id SERIAL PRIMARY KEY,
   employee_id INT NOT NULL REFERENCES users(id),
   manufacture_id INT NOT NULL REFERENCES manufacturers(id)
);

CREATE TABLE product_design (
   id SERIAL PRIMARY KEY,
   design_file VARCHAR NOT NULL,
   -- colors VARCHAR [],
   -- pattern VARCHAR NOT NULL,
   -- height INT NOT NULL,
   -- width INT NOT NULL,
   designer_specs JSON NOT NULL,
   manufacturer_specs JSON,
   complete BOOLEAN NOT NULL DEFAULT FALSE,
   designer_id INT NOT NULL REFERENCES designers(id),
   manufacturer_id INT NOT NULL REFERENCES manufacturers(id)
);

CREATE TABLE materials (
   id SERIAL PRIMARY KEY,
   material VARCHAR NOT NULL UNIQUE
);

CREATE TABLE materials_used (
   id SERIAL PRIMARY KEY,
   manufacturer_id INT NOT NULL REFERENCES manufacturers(id),
   product_id INT NOT NULL REFERENCES product_design(id),
   material_id INT NOT NULL REFERENCES materials(id),
   percentage_used INT NOT NULL
);


INSERT INTO  
   users (username, password_digest, email, avatar_url, account_type) 
VALUES
   ('Test', '$2b$12$9XYzDmcZjnK2npJSe6msQenecn6.iZFUIEQSU3U7Zp/ObIHWMV8Z2', 'testing@email.com', 'https://www.africanprintinfashion.com/wp-content/uploads/2016/07/APIF_estore_africanfashion.jpg', 'DESIGNER'),
   ('JON', '$2b$12$9XYzDmcZjnK2npJSe6msQenecn6.iZFUIEQSU3U7Zp/ObIHWMV8Z2', 'testing@email.com', 'https://www.africanprintinfashion.com/wp-content/uploads/2016/07/APIF_estore_africanfashion.jpg', 'MANUFACTURER'),
   ('PAM', '$2b$12$9XYzDmcZjnK2npJSe6msQenecn6.iZFUIEQSU3U7Zp/ObIHWMV8Z2', 'testing@email.com', 'https://www.africanprintinfashion.com/wp-content/uploads/2016/07/APIF_estore_africanfashion.jpg', 'DESIGNER'),
   ('ANN', '$2b$12$9XYzDmcZjnK2npJSe6msQenecn6.iZFUIEQSU3U7Zp/ObIHWMV8Z2', 'testing@email.com', 'https://www.africanprintinfashion.com/wp-content/uploads/2016/07/APIF_estore_africanfashion.jpg', 'MANUFACTURER');


INSERT INTO 
   manufacturers (manufacturer_name, specialty) 
VALUES
   ('Cotton emporium.', 'we do all things wool and cotton'),
   ('Leather', 'Leather good');


INSERT INTO 
   design_companies (company_name) 
VALUES
   ('Cool Designs'),
   ('Lather Greats');

INSERT INTO
   designers (designer_id, design_company_id)
VALUES
   (1, 1),
   (3, 2);

INSERT INTO
   manufacture_employee (employee_id, manufacture_id)
VALUES
   (2, 1),
   (4, 2);


INSERT INTO 
   product_design (design_file, designer_specs, designer_id, manufacturer_id)
VALUES
   ('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4wRrSyDHTs_93veLkgHiN-PCowkeHZjP-HkfoJungVXYRKm1W', '{ "testingspecs": "asdfas" }' , 1, 1),
   ('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4wRrSyDHTs_93veLkgHiN-PCowkeHZjP-HkfoJungVXYRKm1W', '{ "testingspecs": "asdfas" }' , 1, 2),
   ('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4wRrSyDHTs_93veLkgHiN-PCowkeHZjP-HkfoJungVXYRKm1W', '{ "testingspecs": "asdfas" }' , 2, 1),
   ('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4wRrSyDHTs_93veLkgHiN-PCowkeHZjP-HkfoJungVXYRKm1W', '{ "testingspecs": "asdfas" }' , 2, 2);


INSERT INTO 
   materials (material) 
VALUES 
   ('cotton'),
   ('wool'),
   ('silk'),
   ('polyester'),
   ('rayon');


INSERT INTO 
   materials_used (manufacturer_id, product_id, material_id, percentage_used) 
VALUES 
   (1, 1, 1, 20),
   (1, 1, 2, 20),
   (1, 1, 3, 20),
   (1, 1, 4, 40);