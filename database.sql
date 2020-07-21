DROP DATABASE IF EXISTS CIDADEALTA;
CREATE DATABASE IF NOT EXISTS CIDADEALTA;
USE CIDADEALTA;

CREATE TABLE IF NOT EXISTS user(
	userId INT NOT NULL PRIMARY KEY auto_increment,
	amountBank DECIMAL NOT NULL,
    amountWallet DECIMAL NOT NULL,
    name VARCHAR(150) NOT NULL,
    whitelist bit not null,
    updatedAt datetime not null
);

CREATE TABLE IF NOT EXISTS transaction(
	transactionId INT NOT NULL PRIMARY KEY auto_increment,
	userId INT NOT NULL,
    userIdDestiny INT NULL,
	amount DECIMAL NOT NULL,
    datetime DATETIME NOT NULL,
    type INT NOT NULL
);

ALTER TABLE TRANSACTION ADD CONSTRAINT foreign key(userId) REFERENCES USER(userId);
ALTER TABLE TRANSACTION ADD CONSTRAINT foreign key(userIdDestiny) REFERENCES USER(userId);

INSERT INTO USER (amountBank, amountWallet, name, whitelist, updatedAt) VALUES('50000.0', '5000.0', 'GABRIEL GIRAUD', true, sysdate());
insert into transaction values(null,'1', null, '50000', sysdate(), '1');