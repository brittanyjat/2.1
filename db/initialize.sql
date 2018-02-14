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