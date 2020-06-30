DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers (
id INTEGER PRIMARY KEY NOT NULL auto_increment,
burger_name VARCHAR(140) NOT NULL, 
devoured BOOLEAN NOT NULL DEFAULT FALSE
);

SELECT * FROM burgers;
