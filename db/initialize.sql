-- DROP TABLE IF EXISTS properties

CREATE TABLE properties (
    id SERIAL PRIMARY KEY,
    userId INTEGER,
    name VARCHAR(100),
    description VARCHAR(240),
    loan MONEY,
    monthly MONEY,
    desired MONEY,
    address VARCHAR(100),
    city VARCHAR(100),
    state VARCHAR(15),
    zip VARCHAR(10),
    imgUrl VARCHAR(240),
    FOREIGN KEY ( userId ) REFERENCES users(UserID)
)

CREATE TABLE users (
    userId SERIAL PRIMARY KEY,
    username VARCHAR(50),
    password VARCHAR(50)
)


INSERT INTO users (username, password)
VALUES ('CJ', 'chocolateisyummy')

INSERT INTO properties(userId, name, description, loan, monthly, desired, address, city, state, zip, imgurl)
VALUES (1, 'Tiny House', 'itty bitty little house', 5000, 500, 100, '123 Tiny Lane', 'Waldport', 'OR', '99999', 'https://pictures.escapia.com/BCHFRR/2685380953.jpg')