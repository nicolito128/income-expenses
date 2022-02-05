-- creating the database
CREATE DATABASE ingresos_egresos;

-- using the db
use ingresos_egresos;

CREATE TABLE transactions {
    id INT(7) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    concept VARCHAR(500) NOT NULL,
    amount INT(10) NOT NULL,
    type VARCHAR(50) NOT NULL
};

SHOW TABLES;

describe transactions;