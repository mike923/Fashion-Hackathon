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

CREATE TABLE manufacture_design (
    id SERIAL PRIMARY KEY,
    manufacturer_name VARCHAR NOT NULL,
    product_id INT NOT NULL REFERENCES designs(id)
);

CREATE TABLE materials_used (
    id SERIAL PRIMARY KEY,
    manufacture_design_id INT NOT NULL REFERENCES manufacture_design(id),
    material_id INT NOT NULL REFERENCES materials(id),
    percentage_used INT NOT NULL
);

INSERT INTO  users (username,password_digest,email) VALUES('Test','testing','testing@email.com');


 