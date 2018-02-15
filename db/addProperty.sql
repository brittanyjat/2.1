INSERT INTO properties (userId, name, description, loan, monthly, desired, address, city, state, zip, imgUrl)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)

RETURNING *;