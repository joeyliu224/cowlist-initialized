CREATE DATABASE IF NOT EXISTS cows;

USE cows;

CREATE TABLE cowlist (
    id INT NOT NULL AUTO_INCREMENT,
    name CHAR(50),
    description TEXT,
    PRIMARY KEY (ID)
);

/*
    Excute file from cml:
    mysql -u -root < server/schema.sql
*/