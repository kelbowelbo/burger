DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE `burgers` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `burger_name` varchar(100) NOT NULL,
  `devoured` boolean NOT NULL,
  `date` timestamp,
  PRIMARY KEY (`id`)
);

