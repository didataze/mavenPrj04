
delimiter $$

CREATE DATABASE `test` /*!40100 DEFAULT CHARACTER SET utf8 */$$

test
---------------------------------------------------------------------

CREATE  TABLE `test`.`stock` (
  `STOCK_ID` INT UNSIGNED NOT NULL AUTO_INCREMENT ,
  `STOCK_CODE` VARCHAR(45) NOT NULL ,
  `STOCK_NAME` VARCHAR(45) NOT NULL ,
  PRIMARY KEY (`STOCK_ID`) ,
  UNIQUE INDEX `STOCK_CODE_UNIQUE` (`STOCK_CODE` ASC) ,
  UNIQUE INDEX `STOCK_NAME_UNIQUE` (`STOCK_NAME` ASC) )
DEFAULT CHARACTER SET = utf8;

-------------------------------------------------------------------

INSERT INTO `stock` (`STOCK_ID`,`STOCK_CODE`,`STOCK_NAME`) VALUES (1,'Nocha','GENM bcp blabla ');
INSERT INTO `stock` (`STOCK_ID`,`STOCK_CODE`,`STOCK_NAME`) VALUES (4,'Idetica','quelques fonctions d');
INSERT INTO `stock` (`STOCK_ID`,`STOCK_CODE`,`STOCK_NAME`) VALUES (5,'Ali','web et du graphisme.');
INSERT INTO `stock` (`STOCK_ID`,`STOCK_CODE`,`STOCK_NAME`) VALUES (6,'Ebra','Mais dans le cadre ');

