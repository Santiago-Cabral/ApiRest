CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employess (
    id INT (11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL
    PRIMARY KEY (id)
);
 
INSERT INTO `companydb`.`employess` (`id`, `name`, `salary`) VALUES 
('1','Santiago', '90000'),
('2','Leonel', '10000'),
('3','Javier', '50000'),
('4','Constanza', '80000');



