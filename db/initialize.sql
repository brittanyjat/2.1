-- DROP TABLE IF EXISTS properties

CREATE TABLE properties (
    id SERIAL PRIMARY KEY,
    userId INTEGER,
    name VARCHAR(100),
    description VARCHAR(240),
    loan MONEY,
    monthly MONEY,
    recommended MONEY,
    desired MONEY,
    address VARCHAR(100),
    city VARCHAR(100),
    state VARCHAR(15),
    zip VARCHAR(10),
    imgUrl VARCHAR(240),
    ---------> SIMULATION2 67E FOREIGN KEY
    FOREIGN KEY ( userId ) REFERENCES users(UserID)
)

CREATE TABLE users (
    ----------> SIMULATION 68E ONE-TO-MANY. userId is related to property table with multiple properties.
    userId SERIAL PRIMARY KEY,
    username VARCHAR(50),
    password VARCHAR(50),
    UNIQUE (username) ----------> SIMULATION2 67G UNIQUE KEYS
);


INSERT INTO users (username, password)
VALUES ('CJ', 'chocolateisyummy')

INSERT INTO properties(userId, name, description, loan, monthly, recommended, desired, address, city, state, zip, imgurl)
VALUES (1, 'Tiny House', 'itty bitty little house', 5000, 500, 625, 100, '123 Tiny Lane', 'Waldport', 'OR', '99999', 'https://pictures.escapia.com/BCHFRR/2685380953.jpg')