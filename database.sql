DROP DATABASE IF EXISTS CIDADEALTA;
CREATE DATABASE IF NOT EXISTS CIDADEALTA;
USE CIDADEALTA;

CREATE TABLE IF NOT EXISTS user(
	userId INT NOT NULL PRIMARY KEY auto_increment,
	amountBank DECIMAL(14,2) NOT NULL,
    amountWallet DECIMAL(14,2) NOT NULL,
    name VARCHAR(150) NOT NULL,
    whitelist bit not null,
    updatedAt datetime not null
);

CREATE TABLE IF NOT EXISTS transaction(
	transactionId INT NOT NULL PRIMARY KEY auto_increment,
	userId INT NOT NULL,
    userIdDestiny INT NULL,
	amount DECIMAL(14,2) NOT NULL,
    datetime DATETIME NOT NULL,
    type INT NOT NULL
);

ALTER TABLE TRANSACTION ADD CONSTRAINT foreign key(userId) REFERENCES USER(userId);
ALTER TABLE TRANSACTION ADD CONSTRAINT foreign key(userIdDestiny) REFERENCES USER(userId);

INSERT INTO USER (amountBank, amountWallet, name, whitelist, updatedAt) VALUES('50000.0', '5000.0', 'Gabriel', true, sysdate());
INSERT INTO USER (amountBank, amountWallet, name, whitelist, updatedAt) VALUES('50000.0', '5000.0', 'Boltz', true, sysdate());
INSERT INTO USER (amountBank, amountWallet, name, whitelist, updatedAt) VALUES('50000.0', '5000.0', 'Jimmy', true, sysdate());
INSERT INTO USER (amountBank, amountWallet, name, whitelist, updatedAt) VALUES('50000.0', '5000.0', 'Gabe', true, sysdate());
INSERT INTO USER (amountBank, amountWallet, name, whitelist, updatedAt) VALUES('50000.0', '5000.0', 'Itália', true, sysdate());
INSERT INTO USER (amountBank, amountWallet, name, whitelist, updatedAt) VALUES('50000.0', '5000.0', 'Fanho', true, sysdate());
INSERT INTO USER (amountBank, amountWallet, name, whitelist, updatedAt) VALUES('50000.0', '5000.0', 'China', true, sysdate());
